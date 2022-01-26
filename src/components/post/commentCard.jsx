import React from "react";
import styles from "./commentCard.module.css";
import { API_END_POINT } from "../../constants";

const CommentCard = ({ comment }) => {
  const getElapsedTime = () => {
    const created = new Date(comment.createdAt);
    const now = new Date();
    const MINUTE = 1000 * 60;
    const HOUR = 1000 * 60 * 60;
    const DAY = HOUR * 24;
    const ElapsedTime = now - created;
    const monthFormat =
      created.getMonth() + 1 < 10
        ? "0" + (created.getMonth() + 1)
        : created.getMonth() + 1;

    if (ElapsedTime < MINUTE) {
      return "방금";
    } else if (ElapsedTime < HOUR) {
      return `${Math.floor(ElapsedTime / MINUTE)}분전`;
    } else if (ElapsedTime < DAY) {
      return `${Math.floor(ElapsedTime / HOUR)}시간 전`;
    } else {
      return `${created.getFullYear()}-${monthFormat}-${created.getDate()}`;
    }
  };
  return (
    <article className={styles.commentArticle}>
      <div className={styles.imgWrap}>
        <img
          className={styles.profileImg}
          src={`${API_END_POINT}/${comment.author.image}`}
          alt=""
        />
      </div>
      <div className={styles.contentsWrap}>
        <div className={styles.titleWrap}>
          <div className={styles.nameWrap}>
            <h2 className={styles.userName}>{comment.author.username}</h2>
            <p className={styles.elapsedTime}>{getElapsedTime()}</p>
          </div>
          <button className={styles.moreBtn}>
            <img src="/images/publicImg/s-icon-more-vertical.png" alt="" />
          </button>
        </div>
        <p className={styles.content}>{comment.content}</p>
      </div>
    </article>
  );
};

export default CommentCard;
