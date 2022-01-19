import React from "react";
import styles from "./singleImg.module.css";

const SingleImg = ({ path, deleteSingleImg }) => {
  return (
    <div className={styles.img_wrap}>
      <img className={styles.img_single} src={path} alt="" />
      <img
        className={styles.btn_x}
        src="/images/upload/x.svg"
        onClick={deleteSingleImg}
        alt=""
      />
    </div>
  );
};

export default SingleImg;
