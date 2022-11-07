import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../components/Root";
import ItemListContainer from "../containers/ItemListContainer";

const router = createBrowserRouter([
{
    path: "/",
    element:<Root />,
    errorElement: <h1>No encontrado</h1>,
    children: [
        {
            path: "/",
            element: <ItemListContainer/>,
        },
        {
            path: "/category/:categoryId",
            element:<ItemListContainer/>
        },
        {
            path: "/detail/:id",
            element:<h2>Detalle</h2>
        }

    ]
}
]);

const Router = () => {
    return <RouterProvider router = {router}/>
}

export default Router