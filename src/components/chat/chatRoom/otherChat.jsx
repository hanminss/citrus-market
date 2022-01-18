import React from "react";
import styles from "./otherChat.module.css";

const OtherChat = () => {
  return (
    <article className={styles.other_chat}>
      <img
        className={styles.profile_img}
        src="/images/publicImg/basic-profile-img.png"
        alt=""
      />
      <div className={styles.text_wrap}>
        <div className={styles.bubble}>
          옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다.
          이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할 넣는 풍부하게
          뛰노는 인생의 힘있다.
        </div>
        <p className={styles.text_time}>12:39</p>
      </div>
    </article>
  );
};

export default OtherChat;
