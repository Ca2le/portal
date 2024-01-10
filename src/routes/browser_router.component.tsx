import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "../components/login/login.component";
import ResetPassword from "../components/reset_password/reset_password.component";
import Home from "./pages/home/home.page";
import Recipe from "./pages/recipe/recipe.page";
import ProtectedRoutes from "./protective_route.component";
const Root = () => {
  return (
      <ProtectedRoutes />
  );
};
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
          path: "/recipes",
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
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
