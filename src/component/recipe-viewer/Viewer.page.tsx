import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router";
import DownloaderComponent from "../downloader/Download.component";
import { Recipe } from "../../types/Recipe.type";
import { FaArrowRight } from "react-icons/fa6";
import cntl from "cntl";
import { Recipes, Templates } from "../../data/Data";
import { TemplateItem } from "../../types/Recipe.type";
import { TEMPLATE_ONE } from "../../data/templates/One.template";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

export default function RecipeViewerPage() {
    let { id } = useParams();
    const navigate = useNavigate();

    if (!id) {
        navigate("/");
        return <>not found</>;
    }

    const [recipe, setRecipe] = useState<Recipe>();

    const resolveRecipe = () => {
        const recipe = Recipes.find((template) => template.id === id);
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
    const ref = useRef<HTMLDivElement>(null);

    const [selectedTemplate, setSelectedTemplate] =
        useState<TemplateItem>(TEMPLATE_ONE);

    const isTemplateSelected = (templateItem: TemplateItem) => {
        return selectedTemplate.id === templateItem.id;
    };

    return (
        <div className='flex flex-row justify-center gap-16 md:mx-14 mx-36'>
            <div className='mb-6'>
                <div
                    ref={ref}
                    className='rounded-sm base-recipe-page shadow-recipe shadow-primary-50/50'
                >
                    {selectedTemplate.template(recipe)}
                </div>
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
                            selectTemplate={() => setSelectedTemplate(item)}
                        />
                    ))}
                </div>
                <div className='mt-4'>
                    <DownloaderComponent
                        refToDownload={ref}
                        recipeName={recipe.id}
                    />
                </div>
            </div>
        </div>
    );
}

type ITemplateItem = {
    item: TemplateItem;
    active: boolean;
    selectTemplate: Function;
};
function TemplateLineItem({ item, active, selectTemplate }: ITemplateItem) {
    const activeCss = cntl`shadow-sm border-primary-200 shadow-primary-50`;

    return (
        <div
            onClick={() => selectTemplate()}
            className={`${
                active && activeCss
            } flex flex-row justify-between gap-6 py-2 px-4 border border-slate-200 rounded items-center cursor-pointer hover:border-primary-100 hover:shadow-sm hover:shadow-primary-50`}
        >
            <div className='text-slate-700'>{item.name}</div>
            <div>
                <FaArrowRight className='text-slate-500' />
            </div>
        </div>
    );
}
