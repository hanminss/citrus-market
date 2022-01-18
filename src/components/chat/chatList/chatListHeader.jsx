import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./chatListHeader.module.css";

const ChatListHeader = () => {
  const navigate = useNavigate();
  return (
    <header className={styles.header}>
      <button className={styles.btn} onClick={() => navigate(-1)}>
        <img
          className={styles.header_img}
          src="/images/chat/icon-arrow-left.png"
          alt="뒤로가기"
        />
      </button>
      <button className={styles.btn}>
        <img
          className={styles.header_img}
          src="/images/chat/more-vertical.png"
          alt="더보기"
        />
      </button>
    </header>
  );
};

export default ChatListHeader;
