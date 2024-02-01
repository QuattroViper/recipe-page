import { RefObject } from "react";
import { atom, useRecoilState } from "recoil";

type RecipePageRef = {
    id: string;
    pageRef: RefObject<HTMLDivElement>;
    pageFileName: string;
};

const recipePageRefsStateAtom = atom<Array<RecipePageRef>>({
    key: "page-ref-state",
    default: [],
    dangerouslyAllowMutability: true,
});

export default function useRecipePageRefs() {
    const [pageRefState, setPageRefState] = useRecoilState(
        recipePageRefsStateAtom
    );

    const addPageRef = (
        pageRef: RefObject<HTMLDivElement>,
        pageFileName: string
    ): string => {
        const id = Math.random().toString(16).slice(2);
        setPageRefState((prevState) => [
            ...prevState,
            {
                id,
                pageRef,
                pageFileName,
            },
        ]);
        return id;
    };

    const removePageRef = (id: string) => {
        setPageRefState((prevState) =>
            prevState.filter((pageRefStateItem) => pageRefStateItem.id !== id)
        );
    };

    const resetPageState = () => {
        setPageRefState([]);
    };

    return {
        pageRefs: pageRefState,
        addPageRef,
        removePageRef,
        resetPageState,
    };
}
