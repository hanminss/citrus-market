import React from "react";
import styles from "./commentModal.module.css";

const CommentModal = ({ setModal, own, commentID }) => {
  return (
    <section className={styles.model_wrap}>
      <div className={styles.modal_out} onClick={() => setModal(false)} />
      <div className={styles.modal}>
        <div className={styles.modal_bar} />
        {own ? (
          <button className={styles.modalBtn}>삭제</button>
        ) : (
          <button className={styles.modalBtn}>신고하기</button>
        )}
      </div>
    </section>
  );
};

export default CommentModal;
