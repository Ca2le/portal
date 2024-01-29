
import Router from "./routes/browser_router.component";
import { hexColors } from "./style/global.styles";
import "./style/global.styles.css";

function App() {


  return (
      <div
        style={{
          height: "100vh",
          width: "100%",
          backgroundColor: hexColors.coal.lightest,
          display: "flex",
        }}
      >
        <Router />
      </div>
  );
}

export default App;
