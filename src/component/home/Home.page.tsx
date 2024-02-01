import { useNavigate } from "react-router";
import { Recipe } from "../../types/Recipe.type";
import { Recipes } from "../../data/Data";

export default function HomePage() {
    return (
        <div className='px-4'>
            <div className='flex flex-row gap-4'>
                {Recipes.map((recipe, index) => (
                    <RecipeLineItem recipe={recipe} key={index} />
                ))}
            </div>
        </div>
    );
}

type IRecipeLineItem = {
    recipe: Recipe;
};

function RecipeLineItem({ recipe }: IRecipeLineItem) {
    const navigate = useNavigate();

    const goToRecipe = (id: string) => {
        navigate(`recipes/${id}`);
    };

    return (
        <div
            className='flex flex-col gap-2 p-3 border shadow-lg cursor-pointer rounded-xl hover:border-primary-300/50 border-primary-50/80 shadow-primary-50/30 from-primary-200 to-secondary-200'
            onClick={() => goToRecipe(recipe.id)}
        >
            <img
                className='object-contain rounded-lg w-72'
                src={`/public/recipe-images/${recipe.id}.jpg`}
            />
            <span className='font-semibold text-slate-700'>{recipe.name}</span>
        </div>
    );
}
