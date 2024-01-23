import { useNavigate } from "react-router";

export default function HomePage() {
    const navigate = useNavigate();
    const goToRecipe = (name: string) => {
        navigate(`recipes/${name}`);
    };

    return (
        <div>
            <li
                className='cursor-pointer'
                onClick={() => goToRecipe("spinach-bacon-bread")}
            >
                Spinach Bacon Bread
            </li>
            <li
                className='cursor-pointer'
                onClick={() => goToRecipe("chicken-mushroom-pizza")}
            >
                Chicken Mushroom Pizza
            </li>
        </div>
    );
}
