import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./chatRoomHeader.module.css";

const ChatRoomHeader = () => {
  const navigate = useNavigate();
  return (
    <header className={styles.header}>
      <div className={styles.header_wrap}>
        <button className={styles.btn} onClick={() => navigate(-1)}>
          <img
            className={styles.header_img}
            src="/images/chat/icon-arrow-left.png"
            alt="뒤로가기"
          />
        </button>
        <p className={styles.header_title}>애월읍 위니브 감귤농장</p>
      </div>
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

export default ChatRoomHeader;
