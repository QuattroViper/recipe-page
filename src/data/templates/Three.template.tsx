import { IRecipeTemplate, Recipe, TemplateItem } from "../../types/Recipe.type";

export const TEMPLATE_THREE: TemplateItem = {
    id: "template-three",
    name: "Template Three",
    template: (recipe: Recipe) => [
        <RecipeTemplateThreePageOne recipe={recipe} />,
        <RecipeTemplateThreePageTwo recipe={recipe} />,
    ],
};

function RecipeTemplateThreePageOne({ recipe }: IRecipeTemplate) {
    return (
        <div className='base-recipe-page'>
            <h1 className='text-xl font-bold underline'>{recipe.name}</h1>
        </div>
    );
}

function RecipeTemplateThreePageTwo({ recipe }: IRecipeTemplate) {
    return (
        <div className='base-recipe-page'>
            <h1 className='text-xl font-bold underline'>
                {recipe.description}
            </h1>
        </div>
    );
}
