import { useSelector } from "react-redux";
import Router from "./routes/browser_router.component";
import "./style/global.styles.css";
import { RootState } from "./store/configureStore";
import { Suspense } from "react";
function App() {
  const userIsAuth = useSelector((state: RootState) => state.auth.isAuth);

  return (
      <div
        style={{
          height: "100vh",
          width: "100%",
          backgroundColor: "#F7F7F9",
          display: "flex",
        }}
      >
        <Router />
      </div>
  );
}

export default App;
