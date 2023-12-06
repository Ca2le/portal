import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
import Login from "../components/login/login.component"
import ResetPassword from "../components/reset_password/reset_password.component"
import Home from "./home.component"
import Navbar from "../components/navbar/navbar.component"
import Recipe from "./recepie.component"
const Root = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}
const Router = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Root />,
            children: [
                {
                    path: "/",
                    element: <Home />,
                },
                {
                    path: "/recept",
                    element: <Recipe />,
                },
                {
                    path: "/login",
                    element: <Login />,
                },
                {
                    path: "/reset_password/:token",
                    element: <ResetPassword />,
                },
            ]
        },
    ])

    return <RouterProvider router={router} />
}

export default Router