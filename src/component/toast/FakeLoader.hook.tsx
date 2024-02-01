import { useEffect, useState } from "react";

type IFakeLoader = {
    maxTime: number;
};

const easeInOutQuadratic = (t: number) => {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
};

export const useFakeLoader = ({ maxTime }: IFakeLoader) => {
    const interval: number = 100;
    const maxProgress: number = 100;
    const increment: number = (maxProgress * interval) / maxTime;

    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let progressTimer: NodeJS.Timeout;

        const updateProgress = () => {
            setProgress((prevProgress) => {
                const newProgress = prevProgress + increment;
                return newProgress < maxProgress ? newProgress : maxProgress;
            });
        };

        progressTimer = setInterval(updateProgress, interval);

        return () => {
            clearInterval(progressTimer);
        };
    }, [progress, maxProgress, maxTime]);

    return progress;
};
