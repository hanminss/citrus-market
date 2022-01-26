import React from "react";
import { deleteComment } from "../../../util/fetcher";
import styles from "./commentModal.module.css";

const CommentModal = ({
  setModal,
  own,
  commentID,
  postID,
  token,
  hendleGetComments,
}) => {
  const handleDeleteComment = () => {
    deleteComment(postID, commentID, token) //
      .then((res) => {
        alert(res.data.message);
        hendleGetComments();
        setModal(false);
      });
  };
  return (
    <section className={styles.model_wrap}>
      <div className={styles.modal_out} onClick={() => setModal(false)} />
      <div className={styles.modal}>
        <div className={styles.modal_bar} />
        {own ? (
          <button className={styles.modalBtn} onClick={handleDeleteComment}>
            삭제
          </button>
        ) : (
          <button className={styles.modalBtn}>신고하기</button>
        )}
      </div>
    </section>
  );
};

export default CommentModal;
