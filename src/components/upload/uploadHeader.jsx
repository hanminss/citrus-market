import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./uploadHeader.module.css";

const UploadHeader = ({ validPass }) => {
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

      {validPass ? (
        <button className={`${styles.submit_btn} ${styles.activate}`}>
          업로드
        </button>
      ) : (
        <button className={styles.submit_btn} disabled>
          업로드
        </button>
      )}
    </header>
  );
};

export default UploadHeader;
