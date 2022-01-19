import React from "react";
import styles from "./multiImg.module.css";

const MultiImg = ({ path, idx, deleteMultiImg }) => {
  return (
    <div id={idx} className={styles.img_wrap} key={idx}>
      <img className={styles.img_multi} src={path} alt="" />
      <img
        data-index={idx}
        className={styles.btn_x}
        src="/images/upload/x.svg"
        onClick={() => deleteMultiImg(idx)}
        alt=""
      />
    </div>
  );
};

export default MultiImg;
