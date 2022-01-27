import React, { useState } from "react";
import LogoutCheckModal from "./logoutCheckModal";
import styles from "./logoutModal.module.css";
const LogoutModal = ({ setModal }) => {
  const [checkModal, setCheckModal] = useState(false);
  return (
    <section className={styles.model_wrap}>
      <div className={styles.modal_out} onClick={() => setModal(false)} />
      <div className={styles.modal}>
        <div className={styles.modal_bar} />
        <button className={styles.modalBtn}>설정 및 개인정보</button>
        <button className={styles.modalBtn} onClick={() => setCheckModal(true)}>
          로그아웃
        </button>
      </div>
      {checkModal ? <LogoutCheckModal setCheckModal={setCheckModal} /> : ""}
    </section>
  );
};
export default LogoutModal;
