import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from "../components/NavBar";
import Root from "../components/Root";
import ItemDetailContainer from "../containers/ItemDetailContainer";
import ItemListContainer from "../containers/ItemListContainer";

const router = createBrowserRouter([
{
    path: "/",
    element:<Root />,
    errorElement: <><NavBar/>
                    <h1>No encontrado</h1>
                    </>,
    children: [
        {
            path: "/",
            element: <ItemListContainer/>,
        },
        {
            path: "/genre/:genreId",
            element:<ItemListContainer/>
        },
        {
            path: "/detail/:id",
            element:<ItemDetailContainer />
        }

    ]
}
]);

const Router = () => {
    return <RouterProvider router = {router}/>
}

export default Router