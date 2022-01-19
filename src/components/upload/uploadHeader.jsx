import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./uploadHeader.module.css";

const UploadHeader = () => {
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

      <button className={styles.submit_btn}>업로드</button>
    </header>
  );
};

export default UploadHeader;
