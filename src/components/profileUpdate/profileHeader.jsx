import React from "react";
import styles from "./profileHeader.module.css";
const ProfileHeader = ({ validPass, updateProfile, navigate }) => {
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
          onClick={updateProfile}
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

export default ProfileHeader;
