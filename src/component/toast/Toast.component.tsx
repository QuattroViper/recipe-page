import { PropsWithChildren } from "react";
import useToast from "./Toast.state";

type IToastComponent = {};

export default function ToastComponent({}: IToastComponent) {
    const { getToasts } = useToast();
    return (
        <div className='absolute bottom-0 right-0 z-10 flex flex-col max-w-xs gap-4 mb-7 mr-7 min-w-80'>
            {getToasts().map((toast, index) => (
                <div key={index}>{toast.body}</div>
            ))}
        </div>
    );
}

type IBaseToastItem = {
    children: JSX.Element;
    canClose: boolean;
    icon: JSX.Element;
    title: string;
    type: "info" | "danger" | "success";
};
export function BaseToastItem({
    canClose,
    title,
    icon,
    children,
}: PropsWithChildren<IBaseToastItem>) {
    return (
        <div
            id='toast-interactive'
            className='z-10 w-full p-4 bg-white border rounded-lg shadow-lg border-primary-100/50 shadow-primary-50 text-slate-500'
            role='alert'
        >
            <div className='flex w-full'>
                <div className='inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-blue-500 bg-blue-100 rounded-lg'>
                    {icon}
                    <span className='sr-only'>Refresh icon</span>
                </div>
                <div className='w-full ml-4'>
                    <span className='mb-1 font-semibold text-slate-800 '>
                        {title}
                    </span>
                    {children}
                </div>
                {canClose && (
                    <button
                        type='button'
                        className='ms-auto -mx-1.5 -my-1.5 bg-white items-center justify-center flex-shrink-0 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700'
                        data-dismiss-target='#toast-interactive'
                        aria-label='Close'
                    >
                        <span className='sr-only'>Close</span>
                        <svg
                            className='w-3 h-3'
                            aria-hidden='true'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 14 14'
                        >
                            <path
                                stroke='currentColor'
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                stroke-width='2'
                                d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
                            />
                        </svg>
                    </button>
                )}
            </div>
        </div>
    );
}
