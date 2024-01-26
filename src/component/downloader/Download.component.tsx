import download from "downloadjs";
import { toJpeg } from "html-to-image";
import { Ref, useCallback, useRef } from "react";

export type IDownload = {
    refToDownload: React.RefObject<HTMLDivElement>;
    recipeName: string;
};

export default function DownloaderComponent({
    refToDownload,
    recipeName,
}: IDownload) {
    const filterSecretElements = (node: HTMLElement) => {
        const exclusionClasses = ["secret"];
        return !exclusionClasses.some((classname) =>
            node.classList?.contains(classname)
        );
    };

    const saveRecipe = useCallback(() => {
        if (refToDownload.current === null) {
            return;
        }

        toJpeg(refToDownload.current, {
            cacheBust: true,
            backgroundColor: "#FFF",
            filter: filterSecretElements,
        })
            .then((dataUrl) => {
                download(dataUrl, `${recipeName}.jpeg`);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [refToDownload]);

    return (
        <div>
            <button
                onClick={saveRecipe}
                className='bg-primary-300 hover:bg-primary-200 text-white font-bold py-2 px-10 active:mt-0.5 border-b-4 border-primary hover:border-primary-400 rounded tracking-wider'
            >
                Export Recipe
            </button>
        </div>
    );
}
