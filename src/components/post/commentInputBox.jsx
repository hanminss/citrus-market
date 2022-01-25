import React from "react";
import { API_END_POINT } from "../../constants";
import styles from "./commentInputBox.module.css";

const CommentInputBox = ({ myImg }) => {
  return (
    <section className={styles.commentInputBox}>
      <div className={styles.img_wrap}>
        <img
          className={styles.profileImg}
          src={`${API_END_POINT}/${myImg}`}
          alt=""
        />
      </div>
      <input
        className={styles.input}
        type="text"
        name=""
        id=""
        placeholder="댓글 입력하기..."
      />
      <button className={styles.submitBtn} type="button" disabled>
        게시
      </button>
    </section>
  );
};

export default CommentInputBox;
