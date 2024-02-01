import { BaseToastItem } from "./Toast.component";
import { useFakeLoader } from "./FakeLoader.hook";
import { MdOutlineDownloading } from "react-icons/md";

type IToastItem = {
    canClose: boolean;
};

export default function DownloadToast({ canClose }: IToastItem) {
    const progress = useFakeLoader({ maxTime: 2000 });

    return (
        <BaseToastItem
            canClose={canClose}
            title='Generating Recipe Page'
            icon={<MdOutlineDownloading size={30} />}
            type='info'
        >
            {progress < 100 ? (
                <div className='w-full mt-2 bg-gray-200 rounded-full h-2.5'>
                    <div
                        className='bg-gradient-to-r to-secondary-400 from-primary-400 h-2.5 rounded-full transition-loading'
                        style={{
                            width: `${progress}%`,
                        }}
                    ></div>
                </div>
            ) : (
                <div>
                    <span className='mt-2 text-slate-400'>
                        Successfully Generated Recipe
                    </span>
                </div>
            )}
        </BaseToastItem>
    );
}
