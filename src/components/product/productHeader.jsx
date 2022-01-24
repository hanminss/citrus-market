import React from "react";
import styles from "./productHeader.module.css";

const ProductHeader = ({ navigate }) => {
  return (
    <header className={styles.header}>
      <img
        className={styles.btn_back}
        src="/images/publicImg/icon-arrow-left.png"
        alt=""
        onClick={() => navigate(-1)}
      />
      <button className={styles.btn_upload} type="button" disabled>
        저장
      </button>
    </header>
  );
};

export default ProductHeader;
