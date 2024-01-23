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
    const saveRecipe = useCallback(() => {
        if (refToDownload.current === null) {
            return;
        }

        toJpeg(refToDownload.current, {
            cacheBust: true,
            backgroundColor: "#FFF",
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
            <button onClick={saveRecipe}>download</button>
        </div>
    );
}
