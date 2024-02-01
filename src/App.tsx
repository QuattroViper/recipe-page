import {
    createBrowserRouter,
    createRoutesFromElements,
    Outlet,
    Route,
    RouterProvider,
    useNavigate,
} from "react-router-dom";
import HomePage from "./component/home/Home.page";
import RecipeViewerPage from "./component/recipe-viewer/Viewer.page";
import ToastComponent from "./component/toast/Toast.component";
import DownloaderComponent from "./component/downloader/Download.component";

export default function AppRouterDefinition() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<AppMainLayout />}>
                <Route index element={<HomePage />} />
                <Route path='recipes/:id' element={<RecipeViewerPage />} />
                <Route path='*' element={<div>Page Not Found</div>} />
            </Route>
        )
    );

    return <RouterProvider router={router} />;
}

function AppMainLayout() {
    return (
        <div className='min-h-screen '>
            <Header />
            {/* <ReactQueryDevtools /> */}
            <ToastComponent />
            <Outlet />
        </div>
    );
}

function Header() {
    const navigate = useNavigate();

    return (
        <div className='sticky top-0 z-50 flex flex-row items-center h-16 mx-28'>
            <div className='flex flex-row items-center justify-between w-full gap-4'>
                <h4
                    className='text-2xl font-bold text-transparent cursor-pointer bg-clip-text bg-gradient-to-r to-secondary-600 from-primary-400'
                    onClick={() => navigate("/")}
                >
                    Recipe Page Creator
                </h4>

                <DownloaderComponent />
            </div>
        </div>
    );
}
