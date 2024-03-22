import { Recipe } from "../../types/Recipe.type";

export const EMPTY: Recipe = {
    id: "",
    name: "",
    description: "",
    cost: 0,
    duration: 0,
    servingSize: 0,
    ingredients: [
        {
            name: "",
            amount: "",
        },
        {
            name: "",
            amount: "",
        },
        {
            name: "",
            amount: "",
        },
        {
            name: "",
            amount: "",
        },
        {
            name: "",
            amount: "",
        },
    ],
    instructions: ["", "", "", "", "", "", ""],
    nutrients: [
        {
            name: "Calories",
            amount: "0.0kcal",
        },
        {
            name: "Fiber",
            amount: "0.0g",
        },
        {
            name: "Protien",
            amount: "0.0g",
        },
        {
            name: "Carbs",
            amount: "0.0g",
        },
        {
            name: "Sugars",
            amount: "0.0g",
        },
        {
            name: "Fat",
            amount: "0.0g",
        },
        {
            name: "Salt",
            amount: "0.0g",
        },
    ],
};
