import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Login from "../components/login/login.component"
import ResetPassword from "../components/reset_password/reset_password.component"
import App from "../app"

const Router = () => {
    
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/reset_password/:token",
            element: <ResetPassword />,
        },
    ])

    return <RouterProvider router={router} />
}

export default Router