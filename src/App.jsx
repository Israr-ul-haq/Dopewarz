import "./assets/css/style.css";
import "./assets/css/responsive.css";
import Homepage from "./pages/Homepage";
import ComingSoon from "./pages/ComingSoon";
import { Route, Router, Routes as ReactRoutes } from "react-router-dom";
import Layouts from "./pages/layouts";

function App() {
  /// Routes
  return (
    <>
      <ReactRoutes>
        <Route basename={"/staging"}>
          <Route element={<Layouts />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/comingsoon" element={<ComingSoon />} />
          </Route>
        </Route>
      </ReactRoutes>
    </>
  );
}

export default App;
