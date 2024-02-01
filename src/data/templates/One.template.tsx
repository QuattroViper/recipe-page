import cntl from "cntl";
import { IRecipeTemplate, Recipe, TemplateItem } from "../../types/Recipe.type";

export const TEMPLATE_ONE: TemplateItem = {
    id: "template-one",
    name: "Template One",
    template: (recipe: Recipe) => [<RecipeTemplateOne recipe={recipe} />],
};

function RecipeTemplateOne({ recipe }: IRecipeTemplate) {
    return (
        <div className='h-full pt-4 pb-32'>
            <div className='flex flex-col gap-6'>
                <div className='px-20'>
                    <h1 className='p-5 text-4xl font-semibold leading-5 tracking-widest text-center pb-7 text-slate-700 font-darker-grotesque'>
                        {recipe.name}
                    </h1>
                    <hr />
                </div>
                <div className='px-20'>
                    <p className='leading-5 tracking-wider text-center text-slate-600 font-darker-grotesque'>
                        {recipe.description}
                    </p>
                </div>
                <div>
                    <div className='flex flex-row'>
                        <div className='basis-9/12'>
                            <img
                                className='object-contain w-full '
                                src={`/public/recipe-images/${recipe.id}.jpg`}
                            />
                        </div>
                        <div className='w-full basis-3/12'>
                            <div></div>
                            <h4 className='mt-32 text-2xl -rotate-90 text-slate-400 font-ballet'>
                                Marno van Niekerk
                            </h4>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row px-20'>
                    <div className='basis-8/12'>
                        <div className='flex flex-row justify-between'>
                            <RecipeMetaInfo
                                name='Cooking Method'
                                value='Stove'
                            />
                            <RecipeMetaInfo
                                name='Cooking Time'
                                value='45 Minutes'
                            />
                            <RecipeMetaInfo
                                name='Total Serves'
                                value='2 Person'
                            />
                            <RecipeMetaInfo name='Recipe Cost' value='4 Euro' />
                        </div>
                    </div>
                </div>
                <div className='flex flex-row gap-10 px-20'>
                    <div className='basis-4/12'>
                        <h3 className='text-xl font-semibold text-slate-700 font-darker-grotesque'>
                            Ingredients
                        </h3>
                        <div>
                            {recipe.ingredients.map((ingredient, index) => (
                                <div
                                    key={index}
                                    className='flex flex-row justify-between'
                                >
                                    <span className='leading-[1.3] text-slate-600 font-darker-grotesque'>
                                        {ingredient.name}
                                    </span>
                                    <span className='leading-[1.3] text-slate-600 font-darker-grotesque'>
                                        {ingredient.amount}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='pr-4 basis-8/12'>
                        <h3 className='text-xl font-semibold text-slate-700 font-darker-grotesque'>
                            Instructions
                        </h3>
                        <div>
                            {recipe.instructions.map((instruction, index) => (
                                <div
                                    key={index}
                                    className='flex flex-row gap-1 pb-0.5'
                                >
                                    <span className='leading-[1.3] text-slate-600 font-darker-grotesque'>
                                        {index + 1}.
                                    </span>
                                    <span className='leading-[1.3] text-slate-600 font-darker-grotesque'>
                                        {instruction}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div></div>
                <div className='mx-20 border-t border-l border-r border-slate-300'>
                    <div className='flex flex-row items-start justify-between divide-x divide-slate-300'>
                        {recipe.nutrients.map((nutrient, index) => (
                            <RecipeNutrientItem
                                key={index}
                                name={nutrient.name}
                                value={nutrient.amount}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

type IRecipeMetaInfo = {
    name: string;
    value: string;
};

function RecipeMetaInfo({ name, value }: IRecipeMetaInfo) {
    return (
        <div>
            <div className='text-sm font-semibold leading-3 uppercase font-darker-grotesque text-slate-800'>
                {name}
            </div>
            <div className='font-normal leading-5 uppercase font-darker-grotesque text-slate-700'>
                {value}
            </div>
        </div>
    );
}

type IRecipeNutrientItem = {
    name: string;
    value: string;
    index: number;
};

function RecipeNutrientItem({ name, value, index }: IRecipeNutrientItem) {
    const getHeight = () => {
        switch (index) {
            case 0:
                return cntl`h-4`;
            case 1:
                return cntl`h-8`;
            case 2:
                return cntl``;
            case 3:
                return cntl`h-4`;
            case 4:
                return cntl`h-12`;
            case 5:
                return cntl`h-6`;
        }
    };

    return (
        <div className='flex flex-col items-center justify-center w-full pt-3'>
            <span className='text-xs font-bold leading-3 text-center uppercase text-slate-800 font-darker-grotesque'>
                {name}
            </span>
            <span className='text-lg leading-4 text-slate-600 font-darker-grotesque'>
                {value}
            </span>
            <div className={getHeight()}></div>
        </div>
    );
}
