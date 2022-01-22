import React from "react";
import CheckModal from "./checkModal";
import styles from "./postModal.module.css";
const PostModal = ({ handleModal }) => {
  return (
    <>
      <section className={styles.model_wrap}>
        <div className={styles.modal_out} onClick={() => handleModal("")} />
        <div className={styles.modal}>
          <div className={styles.modal_bar} />
          <button className={styles.modalBtn}>수정</button>
          <button className={styles.modalBtn}>삭제</button>
        </div>
        <CheckModal />
      </section>
    </>
  );
};

export default PostModal;
