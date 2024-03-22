import { Recipe } from "../../types/Recipe.type";

export const COATED_CHICKEN_BREAST: Recipe = {
    id: "coated-chicken-breast",
    name: "Coated Chicken Breast",
    cost: 3,
    duration: 20,
    servingSize: 2,
    description:
        "This recipe transforms chicken breasts into spicy, flavorful delights by slicing them, seasoning with spices, coating in a zesty sauce, and air frying for a crispy finish in just 10 minutes.",
    ingredients: [
        {
            name: "Chicken Breast",
            amount: "300g",
        },
        {
            name: "Chicken Spices",
            amount: "10g",
        },
        {
            name: "Mayonaise",
            amount: "15g",
        },
        {
            name: "Sweet Chilli",
            amount: "15g",
        },
        {
            name: "Tomato Sauce",
            amount: "10g",
        },
        {
            name: "Sriracha",
            amount: "1g",
        },
        {
            name: "Fries",
            amount: "200g",
        },
    ],
    instructions: [
        "Slice the chicken breast horizontally to create two halves.",
        "Make diagonal cuts on the top of each chicken breast half.",
        "Sprinkle your chosen spices on the top of each chicken breast half.",
        "Combine the mayonnaise, sweet chili, Sriracha, and tomato sauce. Generously coat the chicken with this mixture.",
        "Cook in an air fryer (using air fry mode) for 10 minutes at 200 degrees.",
        "Add fries.",
    ],
    nutrients: [
        {
            name: "Calories",
            amount: "254kcal",
        },
        {
            name: "Fiber",
            amount: "3g",
        },
        {
            name: "Protien",
            amount: "28g",
        },
        {
            name: "Carbs",
            amount: "24g",
        },
        {
            name: "Sugars",
            amount: "5g",
        },
        {
            name: "Fat",
            amount: "10g",
        },
        {
            name: "Salt",
            amount: "1g",
        },
    ],
};
