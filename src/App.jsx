import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Splash from "./components/splash/splash";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/login" element={<div>login false</div>} />
        <Route path="/feed" element={<div>login true</div>} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
