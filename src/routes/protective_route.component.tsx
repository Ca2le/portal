import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { RootState } from "../store/configureStore";
import Login from "../components/login/login.component";
import Navbar from "../components/navbar/navbar.component";

const ProtectedRoutes = () => {
  const { isAuth } = useSelector((state: RootState) => state.auth);

  if (!isAuth) {
    return <Login />;
  }

  return (
    <>
        <Navbar />
        <Outlet />
    </>
  );
};
export default ProtectedRoutes;
