import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Chat from "./components/chat/chat";
import Feed from "./components/feed/feed";
import Join from "./components/join/join";
import Login from "./components/login/login";
import NotLogin from "./components/notLogin/notLogin";
import Splash from "./components/splash/splash";
import Upload from "./components/upload/upload";
import Mypage from "./components/mypage/mypage";
import { getCookie } from "./util/cookie";
import ProfileUpdate from "./components/profileUpdate/profileUpdate";
import Product from "./components/product/product";
import Post from "./components/post/post";
import OtherPage from "./components/otherPage/otherPage";
import NotFound from "./components/404/notFound";

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
  }, [isLogin]);

  if (!splash) return <Splash />;

  if (isLogin) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/chat/*" element={<Chat />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/mypage/profile" element={<ProfileUpdate />} />
          <Route path="/mypage/product" element={<Product />} />
          <Route path="/otherPage/:accountname" element={<OtherPage />} />
          <Route path="/post/:postID" element={<Post />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    );
  } else {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NotLogin />} />
          <Route path="/login/*" element={<Login setIsLogin={setIsLogin} />} />
          <Route path="/join/*" element={<Join />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    );
  }
};

export default App;
