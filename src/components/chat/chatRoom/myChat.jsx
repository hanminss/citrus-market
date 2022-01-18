import React from "react";
import styles from "./myChat.module.css";

const MyChat = ({ data }) => {
  return (
    <article className={styles.my_chat}>
      <p className={styles.text_time}>{data.time}</p>
      <div className={styles.bubble}>{data.content}</div>
    </article>
  );
};

export default MyChat;
