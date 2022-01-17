import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import "./App.css";
import Feed from "./components/feed/feed";
import Join from "./components/join/join";
import Login from "./components/login/login";
import Layout from "./components/modules/layout";
import Menu from "./components/modules/menu/menu";
import NotLogin from "./components/notLogin/notLogin";
import Splash from "./components/splash/splash";
import { getCookie } from "./util/cookie";

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [splash, setSplash] = useState(false);

  useEffect(() => {
    if (getCookie("pic_token") && getCookie("pic_accountname")) {
      setIsLogin(true);
    }
    setTimeout(() => {
      setSplash(true);
    }, 1000);
  }, []);

  if (!splash) return <Splash />;

  if (isLogin) {
    return (
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/chat" element={<div>chat</div>} />
            <Route path="/upload" element={<div>upload</div>} />
            <Route path="/mypage" element={<div>mypage</div>} />
            <Route path="/search" element={<div>search</div>} />
            <Route path="*" element={<div>404</div>} />
          </Routes>
        </Layout>
      </BrowserRouter>
    );
  } else {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NotLogin />} />
          <Route path="/login/*" element={<Login setIsLogin={setIsLogin} />} />
          <Route path="/join/*" element={<Join />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </BrowserRouter>
    );
  }
};

export default App;
