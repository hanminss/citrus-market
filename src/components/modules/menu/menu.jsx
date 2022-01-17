import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./menu.module.css";
const Menu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

  return (
    <nav className={styles.menubar}>
      <button className={styles.button} onClick={() => navigate("/")}>
        <img
          className={styles.img_btn}
          src={`/images/menu/icon-home${path === "/" ? "-fill" : ""}.png`}
          alt="홈 버튼"
        />
        <p>홈</p>
      </button>
      <button className={styles.button} onClick={() => navigate("/chat")}>
        <img
          className={styles.img_btn}
          src={`/images/menu/icon-message-circle${
            path === "/chat" ? "-fill" : ""
          }.png`}
          alt="채팅 버튼"
        />
        <p>채팅</p>
      </button>
      <button className={styles.button} onClick={() => navigate("/upload")}>
        <img
          className={styles.img_btn}
          src="/images/menu/icon-edit.png"
          alt="글쓰기 버튼"
        />
        <p>게시물 작성</p>
      </button>
      <button className={styles.button} onClick={() => navigate("/mypage")}>
        <img
          className={styles.img_btn}
          src={`/images/menu/icon-user${path === "/mypage" ? "-fill" : ""}.png`}
          alt="프로필 버튼"
        />
        <p>프로필</p>
      </button>
    </nav>
  );
};

export default Menu;
