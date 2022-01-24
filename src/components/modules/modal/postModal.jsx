import React, { useState } from "react";
import CheckModal from "./checkModal";
import styles from "./postModal.module.css";
const PostModal = ({ handleModal, postDelete }) => {
  const [checkModal, setCheckModal] = useState(false);

  const handleCheckModal = () => {
    if (checkModal) setCheckModal(false);
    else setCheckModal(true);
  };
  return (
    <>
      <section className={styles.model_wrap}>
        <div className={styles.modal_out} onClick={() => handleModal("")} />
        <div className={styles.modal}>
          <div className={styles.modal_bar} />
          <button className={styles.modalBtn}>수정</button>
          <button className={styles.modalBtn} onClick={handleCheckModal}>
            삭제
          </button>
        </div>
        {checkModal ? (
          <CheckModal
            handleCheckModal={handleCheckModal}
            postDelete={postDelete}
          />
        ) : (
          ""
        )}
      </section>
    </>
  );
};

export default PostModal;
