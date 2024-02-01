import download from "downloadjs";
import { toPng } from "html-to-image";
import { useCallback } from "react";
import useToast from "../toast/Toast.state";
import DownloadToast from "../toast/Download.toast";
import useRecipePageRefs from "../recipe-viewer/Viewer.state";

export type IDownload = {};

export default function DownloaderComponent({}: IDownload) {
    const { makeToast } = useToast();
    const { pageRefs } = useRecipePageRefs();

    const downloadPages = () => {
        pageRefs.forEach((pageRefItem) =>
            downloadFile(pageRefItem.pageRef, pageRefItem.pageFileName)
        );
    };

    const downloadFile = (
        refToDownload: React.RefObject<HTMLDivElement>,
        fileName: string
    ) => {
        if (refToDownload.current === null) {
            return;
        }
        toPng(refToDownload.current, {
            cacheBust: true,
            backgroundColor: "#FFF",
            filter: filterSecretElements,
            pixelRatio: 5,
        })
            .then((dataUrl) => {
                download(dataUrl, `${fileName}.png`);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const filterSecretElements = (node: HTMLElement) => {
        const exclusionClasses = ["secret"];
        return !exclusionClasses.some((classname) =>
            node.classList?.contains(classname)
        );
    };

    const saveRecipe = useCallback(() => {
        makeToast({
            body: <DownloadToast canClose={false} />,
            callback: () => downloadPages(),
            timeout: 3500,
        });
    }, [pageRefs]);

    return (
        <div>
            <button
                onClick={saveRecipe}
                className='bg-primary-300 border-grad bg-gradient-to-r from-primary-400 to-secondary-400 hover:from-primary-300 hover:to-secondary-300 hover:bg-primary-200 text-white font-bold py-2 px-10 active:mt-0.5 border-b-4 border-primary hover:border-primary-400 rounded tracking-wider'
            >
                Export Recipe
            </button>
        </div>
    );
}
