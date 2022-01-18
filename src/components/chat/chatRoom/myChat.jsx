import React from "react";
import styles from "./myChat.module.css";

const MyChat = () => {
  return (
    <article className={styles.my_chat}>
      <p className={styles.text_time}>12:50</p>
      <div className={styles.bubble}>네 말씀하세요.</div>
    </article>
  );
};

export default MyChat;
