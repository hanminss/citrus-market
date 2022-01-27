import React from "react";
import styles from "./logoutCheckModal.module.css";

const LogoutCheckModal = ({ setCheckModal }) => {
  return (
    <section className={styles.outer}>
      <div className={styles.checkModal}>
        <p className={styles.modal_msg}>로그아웃하시겠어요?</p>
        <div>
          <button onClick={() => setCheckModal(false)}>취소</button>
          <button>로그아웃</button>
        </div>
      </div>
    </section>
  );
};

export default LogoutCheckModal;
