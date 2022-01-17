import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./menu.module.css";
const Menu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

  return (
    <nav className={styles.menubar}>
      <button onClick={() => navigate("/")}>
        <img
          className={styles.img_btn}
          src={`/images/menu/icon-home${path === "/" ? "-fill" : ""}.png`}
          alt="홈 버튼"
        />
        <p>홈</p>
      </button>
      <button onClick={() => navigate("/chat")}>
        <img
          className={styles.img_btn}
          src={`/images/menu/icon-message-circle${
            path === "/chat" ? "-fill" : ""
          }.png`}
          alt="btn-chat"
        />
        <p>채팅</p>
      </button>
      <button onClick={() => navigate("/upload")}>
        <img
          className={styles.img_btn}
          src="/images/menu/icon-edit.png"
          alt="btn-new-post"
        />
        <p>게시물 작성</p>
      </button>
      <button onClick={() => navigate("/mypage")}>
        <img
          className={styles.img_btn}
          src={`/images/menu/icon-user${path === "/mypage" ? "-fill" : ""}.png`}
          alt="btn-home"
        />
        <p>프로필</p>
      </button>
    </nav>
  );
};

export default Menu;
