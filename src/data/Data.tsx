import { TEMPLATE_ONE } from "./templates/One.template";
import { TEMPLATE_TWO } from "./templates/Two.template";
import { Recipe, TemplateItem } from "../types/Recipe.type";
import { CHICKEN_MUSHROOM_PIZZA } from "./recipes/ChickenMushroomPizza.recipe";
import { SPINACH_BACON_BREAD } from "./recipes/SpinachBaconBread.recipe";
import { BANANA_BREAD } from "./recipes/BananaBread.recipe";
import { TEMPLATE_THREE } from "./templates/Three.template";
import { COATED_CHICKEN_BREAST } from "./recipes/CoatedChickenBreast.recipe";

export const Templates: Array<TemplateItem> = [
    TEMPLATE_ONE,
    TEMPLATE_TWO,
    TEMPLATE_THREE,
];

export const Recipes: Array<Recipe> = [
    SPINACH_BACON_BREAD,
    CHICKEN_MUSHROOM_PIZZA,
    BANANA_BREAD,
    COATED_CHICKEN_BREAST,
];
