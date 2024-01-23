import {
    createBrowserRouter,
    createRoutesFromElements,
    Outlet,
    Route,
    RouterProvider,
} from "react-router-dom";
import HomePage from "./component/home/Home.page";
import RecipeViewerPage from "./component/recipe-viewer/Viewer.page";

export default function AppRouterDefinition() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<AppMainLayout />}>
                <Route index element={<HomePage />} />
                <Route path='recipes/:id' element={<RecipeViewerPage />} />
                <Route path='*' element={<div>Not Found</div>} />
            </Route>
        )
    );

    return <RouterProvider router={router} />;
}

function AppMainLayout() {
    return (
        <div className='min-h-screen '>
            <div>toolbar</div>
            {/* <ReactQueryDevtools /> */}
            <Outlet />
        </div>
    );
}
