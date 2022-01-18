import React from "react";
import { Link } from "react-router-dom";
import styles from "./chatObj.module.css";
const ChatObj = ({ data }) => (
  <Link to="/chat/chatroom">
    <article className={styles.chat}>
      <div className={styles.img_wrap}>
        <img
          className={styles.profile_img}
          src="images/chat/basic-profile-img.png"
          alt=""
        />
        {data.new ? <div className={styles.newChat} /> : ""}
      </div>
      <div className={styles.text_wrap}>
        <h2 className={styles.chat_title}>{data.title}</h2>
        <div className={styles.flex_wrap}>
          <p className={styles.chat_content}>{data.content}</p>
          <p className={styles.chat_date}>{data.date}</p>
        </div>
      </div>
    </article>
  </Link>
);

export default ChatObj;
