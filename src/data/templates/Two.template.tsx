import { useRef } from "react";
import { IRecipeTemplate, Recipe, TemplateItem } from "../../types/Recipe.type";

export const TEMPLATE_TWO: TemplateItem = {
    id: "template-two",
    name: "Template Two",
    template: (recipe: Recipe) => <RecipeTemplateTwo recipe={recipe} />,
};

export default function RecipeTemplateTwo({ recipe }: IRecipeTemplate) {
    return (
        <div className='base-recipe-page'>
            <h1 className='text-3xl font-bold underline'>Hello world!!</h1>
            <h1 className='text-3xl font-bold underline'>
                {JSON.stringify(recipe)}
            </h1>
        </div>
    );
}
