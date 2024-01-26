import { TEMPLATE_ONE } from "./templates/One.template";
import { TEMPLATE_TWO } from "./templates/Two.template";
import { Recipe, TemplateItem } from "../types/Recipe.type";
import { CHICKEN_MUSHROOM_PIZZA } from "./recipes/ChickenMushroomPizza.recipe";
import { SPINACH_BACON_BREAD } from "./recipes/SpinachBaconBread.recipe";

export const Templates: Array<TemplateItem> = [TEMPLATE_ONE, TEMPLATE_TWO];

export const Recipes: Array<Recipe> = [
    SPINACH_BACON_BREAD,
    CHICKEN_MUSHROOM_PIZZA,
];
