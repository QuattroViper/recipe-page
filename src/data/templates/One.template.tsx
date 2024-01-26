import cntl from "cntl";
import { IRecipeTemplate, Recipe, TemplateItem } from "../../types/Recipe.type";

export const TEMPLATE_ONE: TemplateItem = {
    id: "template-one",
    name: "Template One",
    template: (recipe: Recipe) => <RecipeTemplateOne recipe={recipe} />,
};

const scale = 1;
const scalePx = (baseFontSize: number) => {
    return `${baseFontSize * scale}px`;
};

const scaleEm = (baseFontSize: number) => {
    return `${baseFontSize * scale}em`;
};

export default function RecipeTemplateOne({ recipe }: IRecipeTemplate) {
    return (
        <div
            style={{
                paddingTop: scalePx(16),
                paddingBottom: scalePx(128),
            }}
            className='h-full'
        >
            <div
                style={{
                    gap: scalePx(24),
                }}
                className='flex flex-col'
            >
                <div
                    style={{
                        marginLeft: scalePx(80),
                        marginRight: scalePx(80),
                    }}
                >
                    <h1
                        style={{
                            fontSize: scalePx(30),
                            padding: scalePx(20),
                            lineHeight: scalePx(20),
                        }}
                        className='font-semibold tracking-widest text-center text-slate-700 font-darker-grotesque'
                    >
                        {recipe.name}
                    </h1>
                    <hr
                        style={{
                            borderWidth: scalePx(1),
                        }}
                    />
                </div>
                <div
                    style={{
                        marginLeft: scalePx(80),
                        marginRight: scalePx(80),
                    }}
                >
                    <p
                        style={{
                            fontSize: scalePx(14),
                            lineHeight: scalePx(20),
                            letterSpacing: scaleEm(0.05),
                        }}
                        className='text-center text-slate-600 font-darker-grotesque'
                    >
                        This mouthwatering dish combines the rich flavors of
                        sautéed spinach and crispy bacon, nestled on a bed of
                        freshly cut open ciabatta bread. The creamy texture of
                        the spinach is perfectly complemented by the savory
                        notes of the bacon, creating a symphony of flavors that
                        dance on your palate.
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
                            <h4
                                style={{
                                    fontSize: scalePx(24),
                                    lineHeight: scalePx(32),
                                    marginTop: scalePx(128),
                                }}
                                className='-rotate-90 opacity-40 font-ballet'
                            >
                                Marno van Niekerk
                            </h4>
                        </div>
                    </div>
                </div>
                <div
                    className='flex flex-row'
                    style={{
                        marginLeft: scalePx(80),
                        marginRight: scalePx(80),
                    }}
                >
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
                <div
                    className='flex flex-row'
                    style={{
                        marginLeft: scalePx(80),
                        marginRight: scalePx(80),
                        gap: scalePx(40),
                    }}
                >
                    <div className='basis-4/12'>
                        <h3
                            style={{
                                fontSize: scalePx(18),
                                lineHeight: scalePx(28),
                            }}
                            className='font-semibold text-slate-700 font-darker-grotesque'
                        >
                            Ingredients
                        </h3>
                        <div>
                            {recipe.ingredients.map((ingredient, index) => (
                                <div
                                    style={{
                                        paddingBottom: scalePx(2),
                                    }}
                                    key={index}
                                    className='flex flex-row justify-between'
                                >
                                    <span
                                        style={{
                                            fontSize: scalePx(14),
                                            lineHeight: scalePx(20),
                                        }}
                                        className='text-slate-600 font-darker-grotesque'
                                    >
                                        {ingredient.name}
                                    </span>
                                    <span
                                        style={{
                                            fontSize: scalePx(14),
                                            lineHeight: scalePx(20),
                                        }}
                                        className='text-slate-600 font-darker-grotesque'
                                    >
                                        {ingredient.amount}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='pr-4 basis-8/12'>
                        <h3
                            style={{
                                fontSize: scalePx(18),
                                lineHeight: scalePx(28),
                            }}
                            className='font-semibold text-slate-700 font-darker-grotesque'
                        >
                            Instructions
                        </h3>
                        <div>
                            {recipe.instructions.map((instruction, index) => (
                                <div
                                    style={{
                                        gap: scalePx(4),
                                        paddingBottom: scalePx(2),
                                    }}
                                    key={index}
                                    className='flex flex-row'
                                >
                                    <span
                                        style={{
                                            fontSize: scalePx(14),
                                            lineHeight: scalePx(20),
                                        }}
                                        className='text-slate-600 font-darker-grotesque'
                                    >
                                        {index + 1}.
                                    </span>
                                    <span
                                        style={{
                                            fontSize: scalePx(14),
                                            lineHeight: scalePx(20),
                                        }}
                                        className='text-slate-600 font-darker-grotesque'
                                    >
                                        {instruction}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div></div>
                <div
                    style={{
                        marginLeft: scalePx(80),
                        marginRight: scalePx(80),
                        borderLeftWidth: scalePx(1),
                        borderRightWidth: scalePx(1),
                        borderTopWidth: scalePx(1),
                    }}
                    className='border-slate-300'
                >
                    <div className='flex flex-row items-start justify-between divide-x divide-slate-300'>
                        <RecipeNutrientItem
                            name='Calories'
                            value='560kcal'
                            height='4'
                        />
                        <RecipeNutrientItem
                            name='Fiber'
                            value='7g'
                            height='8'
                        />
                        <RecipeNutrientItem
                            name='Protien'
                            value='10g'
                            height='2'
                        />
                        <RecipeNutrientItem
                            name='Carbs'
                            value='90g'
                            height='4'
                        />
                        <RecipeNutrientItem
                            name='Sugars'
                            value='6g'
                            height='12'
                        />
                        <RecipeNutrientItem name='Fat' value='12g' height='4' />
                        <RecipeNutrientItem
                            name='Salt'
                            value='2.1g'
                            height='6'
                        />
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
            <div
                style={{
                    fontSize: scalePx(12),
                    lineHeight: scalePx(12),
                }}
                className='font-semibold uppercase font-darker-grotesque text-slate-800'
            >
                {name}
            </div>
            <div
                style={{
                    fontSize: scalePx(14),
                    lineHeight: scalePx(14),
                }}
                className='font-normal uppercase font-darker-grotesque text-slate-700'
            >
                {value}
            </div>
        </div>
    );
}

type IRecipeNutrientItem = {
    name: string;
    value: string;
    height: "2" | "4" | "6" | "8" | "12";
};

function RecipeNutrientItem({ name, value, height }: IRecipeNutrientItem) {
    const getHeight = () => {
        switch (height) {
            case "2":
                return cntl``;
            case "4":
                return cntl`h-4`;
            case "6":
                return cntl`h-6`;
            case "8":
                return cntl`h-8`;
            case "12":
                return cntl`h-12`;
        }
    };

    return (
        <div
            style={{
                paddingTop: scalePx(12),
            }}
            className='flex flex-col items-center justify-center w-full'
        >
            <span
                style={{
                    lineHeight: scalePx(12),
                    fontSize: scalePx(10),
                }}
                className='font-bold text-center uppercase text-slate-800 font-darker-grotesque'
            >
                {name}
            </span>
            <span
                style={{
                    lineHeight: scalePx(16),
                    fontSize: scalePx(16),
                }}
                className='text-slate-600 font-darker-grotesque'
            >
                {value}
            </span>
            <div className={getHeight()}></div>
        </div>
    );
}
