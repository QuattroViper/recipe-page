import { ReactNode } from "react";

export type Recipe = {
    id: string;
    name: string;
    description: string;
    ingredients: Array<RecipeNameValue>;
    instructions: Array<String>;
    nutrients: Array<RecipeNameValue>;
    cost: number;
    servingSize: number;
    duration: number;
};

export type RecipeNameValue = {
    name: string;
    amount: string;
};

export type IRecipeTemplate = {
    recipe: Recipe;
};

export type TemplateItem = {
    id: string;
    name: string;
    template: (recipe: Recipe) => Array<ReactNode>;
};
