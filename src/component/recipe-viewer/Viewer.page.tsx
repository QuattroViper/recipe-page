import { ReactNode, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router";
import DownloaderComponent from "../downloader/Download.component";
import { Recipe } from "../../types/Recipe.type";
import { FaArrowRight } from "react-icons/fa6";
import cntl from "cntl";
import { Recipes, Templates } from "../../data/Data";
import { TemplateItem } from "../../types/Recipe.type";
import { TEMPLATE_ONE } from "../../data/templates/One.template";
import useRecipePageRefs from "./Viewer.state";

export default function RecipeViewerPage() {
    let { id } = useParams();
    const navigate = useNavigate();

    if (!id) {
        navigate("/");
        return <>not found</>;
    }

    const [recipe, setRecipe] = useState<Recipe>();

    const resolveRecipe = () => {
        const recipe = Recipes.find((recipe) => recipe.id === id);
        if (recipe) {
            setRecipe(recipe);
        } else {
            navigate("/");
        }
    };

    useEffect(() => {
        resolveRecipe();
    }, [id]);

    if (!recipe) {
        return <>not found</>;
    }

    return <RecipeViewComponent recipe={recipe} />;
}

type IRecipeView = {
    recipe: Recipe;
};

function RecipeViewComponent({ recipe }: IRecipeView) {
    const { resetPageState } = useRecipePageRefs();

    const [selectedTemplate, setSelectedTemplate] =
        useState<TemplateItem>(TEMPLATE_ONE);

    const isTemplateSelected = (templateItem: TemplateItem) => {
        return selectedTemplate.id === templateItem.id;
    };

    const selectTemplate = (template: TemplateItem) => {
        resetPageState();
        setSelectedTemplate(template);
    };

    return (
        <div className='flex flex-row justify-center gap-16 md:mx-14 mx-36'>
            <div className='flex flex-col gap-8 mb-6'>
                {selectedTemplate.template(recipe).map((page, index) => (
                    <RecipePageItem
                        key={index}
                        page={page}
                        template={selectedTemplate}
                        index={index}
                        recipe={recipe}
                    />
                ))}
            </div>
            <div className='w-full xl:w-1/6 rounded-xl md:min-w-24'>
                <div className='mb-2 text-slate-800'>
                    <span className='text-lg tracking-wider text-transparent bg-clip-text bg-gradient-to-r to-secondary-600 from-primary-400'>
                        Templates:
                    </span>
                </div>
                <div className='flex flex-col gap-2'>
                    {Templates.map((item, index) => (
                        <TemplateLineItem
                            key={index}
                            item={item}
                            active={isTemplateSelected(item)}
                            selectTemplate={() => selectTemplate(item)}
                        />
                    ))}
                </div>
                <div className='mt-4'>
                    <DownloaderComponent />
                </div>
            </div>
        </div>
    );
}

type IRecipePageItem = {
    recipe: Recipe;
    page: ReactNode;
    template: TemplateItem;
    index: number;
};
function RecipePageItem({ page, index, recipe, template }: IRecipePageItem) {
    const { addPageRef, removePageRef } = useRecipePageRefs();
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const pageId = addPageRef(
            ref,
            `${recipe.id}-${template.id}-${index + 1}`
        );

        return () => {
            removePageRef(pageId);
            ref.current = null;
        };
    }, [template]);

    return (
        <div
            key={index}
            ref={ref}
            className='rounded-sm base-recipe-page shadow-recipe shadow-primary-50/50'
        >
            {page}
        </div>
    );
}

type ITemplateItem = {
    item: TemplateItem;
    active: boolean;
    selectTemplate: Function;
};
function TemplateLineItem({ item, active, selectTemplate }: ITemplateItem) {
    const css = active
        ? cntl`shadow-sm border-primary-100 shadow-primary-50`
        : `border-slate-200`;

    return (
        <div
            onClick={() => selectTemplate()}
            className={`${css} flex flex-row justify-between gap-6 py-2 px-4 border  rounded items-center cursor-pointer hover:border-primary-100 hover:shadow-sm hover:shadow-primary-50`}
        >
            <div className='text-slate-700'>{item.name}</div>
            <div>
                <FaArrowRight className='text-slate-500' />
            </div>
        </div>
    );
}
