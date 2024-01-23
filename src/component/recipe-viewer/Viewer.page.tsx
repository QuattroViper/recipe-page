import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import DownloaderComponent from "../downloader/Download.component";
import { Recipe } from "../../types/Recipe.type";

export default function RecipeViewerPage() {
    let { id } = useParams();

    if (!id) {
        return <>not found</>;
    }

    const [recipe, setRecipe] = useState<Recipe>();

    const resolveRecipe = () => {
        setRecipe({
            id: id ?? "",
            name: "Name",
        });
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

    return (
        <div>
            <div ref={ref} className='base-recipe-page'>
                <h1 className='text-3xl font-bold underline'>{recipe.name}</h1>
            </div>
            <div>Templates [ ]</div>
            <div>
                <DownloaderComponent refToDownload={ref} recipeName='' />
            </div>
        </div>
    );
}
