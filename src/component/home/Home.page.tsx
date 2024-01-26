import { useNavigate } from "react-router";
import { Recipe } from "../../types/Recipe.type";
import { Recipes } from "../../data/Data";

export default function HomePage() {
    return (
        <div>
            {Recipes.map((recipe, index) => (
                <RecipeLineItem recipe={recipe} key={index} />
            ))}
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
        <div className='cursor-pointer' onClick={() => goToRecipe(recipe.id)}>
            {recipe.name}
        </div>
    );
}
