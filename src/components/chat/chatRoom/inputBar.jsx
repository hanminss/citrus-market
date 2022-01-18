import React, { useRef } from "react";
import { useState } from "react/cjs/react.development";
import styles from "./inputBar.module.css";

const InputBar = () => {
  const msgRef = useRef();
  const fileRef = useRef();

  const [haveFile, setHaveFile] = useState(false);
  const [haveMsg, setHaveMsg] = useState(false);

  const handleOnChange = () => {
    if (fileRef.current.files.length) setHaveFile(true);
    else setHaveFile(false);
  };

  const handleOnInput = () => {
    if (msgRef.current.value) setHaveMsg(true);
    else setHaveMsg(false);
  };
  return (
    <section className={styles.bar_menu}>
      <div className={styles.input_wrap}>
        <label htmlFor="img_upload">
          <img src="/images/publicImg/img-button.png" alt="" />
        </label>
        <input
          ref={fileRef}
          type="file"
          id="img_upload"
          hidden
          accept="image/*"
          onChange={handleOnChange}
        />
        <input
          ref={msgRef}
          id="input_msg"
          className={styles.input_msg}
          type="text"
          placeholder="메시지 입력하기.."
          onInput={handleOnInput}
        />
      </div>
      {haveFile || haveMsg ? (
        <button
          id="send_btn"
          className={`${styles.send_btn} ${styles.send_active}`}
        >
          전송
        </button>
      ) : (
        <button id="send_btn" className={styles.send_btn} disabled>
          전송
        </button>
      )}
    </section>
  );
};

export default InputBar;
