import { ReactNode } from "react";

export type Recipe = {
    id: string;
    name: string;
    ingredients: Array<RecipeIngredient>;
    instructions: Array<String>;
};

export type RecipeIngredient = {
    name: string;
    amount: string;
};

export type IRecipeTemplate = {
    recipe: Recipe;
};

export type TemplateItem = {
    id: string;
    name: string;
    template: (recipe: Recipe) => ReactNode;
};
