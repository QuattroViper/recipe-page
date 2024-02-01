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
        <div className='flex flex-row items-center pt-2 mx-2 mb-6'>
            <h4 className='text-2xl font-bold text-primary-400'>
                Recipe Page Creator
            </h4>
            <div className='flex flex-row gap-4 ml-20'>
                <a
                    onClick={() => navigate("/")}
                    className='font-semibold cursor-pointer'
                >
                    Home
                </a>
            </div>
        </div>
    );
}
