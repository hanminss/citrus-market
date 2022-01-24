import React from "react";
import styles from "./productHeader.module.css";

const ProductHeader = ({ navigate, validPass, handleUpload }) => {
  return (
    <header className={styles.header}>
      <img
        className={styles.btn_back}
        src="/images/publicImg/icon-arrow-left.png"
        alt=""
        onClick={() => navigate(-1)}
      />
      {validPass ? (
        <button
          className={`${styles.btn_upload} ${styles.activate}`}
          type="button"
          onClick={handleUpload}
        >
          저장
        </button>
      ) : (
        <button className={styles.btn_upload} type="button" disabled>
          저장
        </button>
      )}
    </header>
  );
};

export default ProductHeader;
