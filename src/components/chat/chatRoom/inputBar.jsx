import React from "react";
import styles from "./inputBar.module.css";

const InputBar = () => {
  return (
    <section className={styles.bar_menu}>
      <div className={styles.input_wrap}>
        <label htmlFor="img_upload">
          <img src="/images/publicImg/img-button.png" alt="" />
        </label>
        <input type="file" id="img_upload" hidden accept="image/*" />
        <input
          id="input_msg"
          className={styles.input_msg}
          type="text"
          placeholder="메시지 입력하기.."
        />
      </div>
      <button id="send_btn" className={styles.send_btn} disabled>
        전송
      </button>
    </section>
  );
};

export default InputBar;
