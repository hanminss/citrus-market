import React from "react";
import styles from "./checkModal.module.css";
const CheckModal = () => (
  <section className={styles.outer}>
    <div className={styles.checkModal}>
      <p className={styles.modal_msg}>게시글을 삭제할까요?</p>
      <div>
        <button>취소</button>
        <button>삭제</button>
      </div>
    </div>
  </section>
);

export default CheckModal;
