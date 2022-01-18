import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import styles from "./chatRoomHeader.module.css";

const ChatRoomHeader = () => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  return (
    <>
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
        <button className={styles.btn} onClick={() => setModal(true)}>
          <img
            className={styles.header_img}
            src="/images/chat/more-vertical.png"
            alt="더보기"
          />
        </button>
      </header>
      {modal ? (
        <section className={styles.modal_wrap}>
          <div
            className={styles.modal_out}
            onClick={() => setModal(false)}
          ></div>
          <div className={styles.modal}>
            <div className={styles.modal_bar}></div>
            <button className={styles.outBtn} onClick={() => navigate("/chat")}>
              채팅방 나가기
            </button>
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
};

export default ChatRoomHeader;
