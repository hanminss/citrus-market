import React from "react";
import styles from "./splash.module.css";

const Splash = () => {
  return (
    <div className={styles.logo_wrap}>
      <img
        className={styles.img_logo}
        src="/images/splash/full-logo.png"
        alt="로고 이미지"
      />
    </div>
  );
};
export default Splash;
