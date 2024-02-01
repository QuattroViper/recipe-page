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
        refToDownload: HTMLDivElement | null,
        fileName: string
    ) => {
        if (refToDownload === null) {
            return;
        }
        toPng(refToDownload, {
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

    if (pageRefs.length === 0) {
        return <div />;
    }

    return (
        <div>
            <button
                onClick={saveRecipe}
                className='px-10 py-2 font-bold tracking-widest text-white uppercase rounded text bg-primary-300 bg-gradient-to-r from-primary-400 to-secondary-400 hover:from-primary-300 hover:to-secondary-300 hover:bg-primary-200'
            >
                Export Recipe
            </button>
        </div>
    );
}
