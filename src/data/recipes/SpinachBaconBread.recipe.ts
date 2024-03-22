import { Recipe } from "../../types/Recipe.type";

export const SPINACH_BACON_BREAD: Recipe = {
    id: "spinach-bacon-bread",
    name: "Spinach Bacon Bread",
    cost: 0,
    duration: 0,
    servingSize: 0,
    description:
        "This mouthwatering dish combines the rich flavors of sautéed spinach and crispy bacon, nestled on a bed of freshly cut open ciabatta bread. The creamy texture of the spinach is perfectly complemented by the savory notes of the bacon, creating a symphony of flavors that dance on your palate.",
    ingredients: [
        {
            name: "Spinach Leaves",
            amount: "200g",
        },
        {
            name: "Corn Flour",
            amount: "10g",
        },
        {
            name: "Heavy Cream",
            amount: "100ml",
        },
        {
            name: "Unsalted Butter",
            amount: "25g",
        },
        {
            name: "Feta Cheese",
            amount: "50g",
        },
        {
            name: "Mushrooms",
            amount: "150g",
        },
        {
            name: "Bacon Slices",
            amount: "150g",
        },
        {
            name: "Ciabatta Bread",
            amount: "2pc",
        },
    ],
    instructions: [
        "In a large skillet, heat olive oil over medium heat. Add the sliced mushrooms and sauté until they're golden brown. Then, add the chopped spinach, cooking until it wilts and releases its moisture. Season with salt seasoning to taste.",
        "Pour the heavy cream into the skillet with the sautéed spinach and mushrooms. Stir well to combine, allowing the cream to thicken and coat the spinach.",
        "In a separate pan, cook the bacon until it's crispy.",
        "Place the bacon on top of the toasted ciabatta bread, place the creamy spinach and mushroom mixture generously on top of the bacon. Sprinkle the crumbled feta cheese over the top.",
    ],
    nutrients: [
        {
            name: "Calories",
            amount: "560kcal",
        },
        {
            name: "Fiber",
            amount: "7g",
        },
        {
            name: "Protien",
            amount: "10g",
        },
        {
            name: "Carbs",
            amount: "90g",
        },
        {
            name: "Sugars",
            amount: "6g",
        },
        {
            name: "Fat",
            amount: "12g",
        },
        {
            name: "Salt",
            amount: "2.1g",
        },
    ],
};
