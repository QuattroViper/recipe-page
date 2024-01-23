import { useRef } from "react";

export default function RecipePage() {
    const ref = useRef<HTMLDivElement>(null);

    return (
        <div ref={ref} className='base-recipe-page'>
            <h1 className='text-3xl font-bold underline'>Hello world!!</h1>
            <h1 className='text-3xl font-bold underline'>Page 2</h1>
        </div>
    );
}
