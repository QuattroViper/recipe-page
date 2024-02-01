import { useEffect } from "react";
import { atom, useRecoilState } from "recoil";

type ToastDataItem = {
    id: string;
    body: JSX.Element;
    timeout: number;
    timeoutTime: number;
    callback: () => void;
};

type ToastRequestItem = {
    body: JSX.Element;
    timeout?: number;
    callback?: () => void;
};

const toastStateAtom = atom<Array<ToastDataItem>>({
    key: "toast-state",
    default: [],
});

export default function useToast() {
    const [toastState, setToastState] = useRecoilState(toastStateAtom);

    useEffect(() => {
        const removeToasts = () => {
            const toastsToRemove = toastState.filter(
                (toast) => toast.timeoutTime < performance.now()
            );

            toastsToRemove.forEach((toast) => toast.callback());
            if (toastsToRemove.length > 0) {
                setToastState(
                    toastState.filter(
                        (toast) => !toastsToRemove.includes(toast)
                    )
                );
            }
        };

        const progressTimer = setInterval(removeToasts, 100);

        return () => {
            clearInterval(progressTimer);
        };
    });
    // const toastRemoval = useInter

    const makeToast = ({
        body,
        timeout = 3000,
        callback = () => {},
    }: ToastRequestItem) => {
        setToastState((prevState) => {
            return [
                ...prevState,
                {
                    id: Math.random().toString(16).slice(2),
                    body,
                    timeout,
                    timeoutTime: performance.now() + timeout,
                    callback,
                },
            ];
        });
    };

    const getToasts = () => toastState;

    return { makeToast, getToasts };
}
