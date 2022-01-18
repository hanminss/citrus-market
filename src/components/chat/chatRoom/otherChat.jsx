import React from "react";
import styles from "./otherChat.module.css";

const OtherChat = ({ data }) => {
  return (
    <article className={styles.other_chat}>
      <img
        className={styles.profile_img}
        src="/images/publicImg/basic-profile-img.png"
        alt=""
      />
      <div className={styles.text_wrap}>
        <div className={styles.bubble}>{data.content}</div>
        <p className={styles.text_time}>{data.time}</p>
      </div>
    </article>
  );
};

export default OtherChat;
