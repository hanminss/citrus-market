import React from "react";
import styles from "./profileHeader.module.css";
const ProfileHeader = () => {
  return (
    <header className={styles.header}>
      <img
        className={styles.btn_back}
        src="/images/publicImg/icon-arrow-left.png"
        alt=""
      />

      <button className={styles.btn_upload} type="button" disabled>
        저장
      </button>
    </header>
  );
};

export default ProfileHeader;
