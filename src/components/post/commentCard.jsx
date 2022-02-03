import React, { useState } from "react";
import styles from "./commentCard.module.css";
import { API_END_POINT } from "../../constants";
import CommentModal from "../modules/modal/commentModal";

const CommentCard = ({
  comment,
  accountName,
  postID,
  token,
  hendleGetComments,
}) => {
  const [modal, setModal] = useState(false);
  const getElapsedTime = () => {
    const created = new Date(comment.createdAt);
    const now = new Date();
    const MINUTE = 1000 * 60;
    const HOUR = MINUTE * 60;
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

  const ownComment = () => {
    if (accountName === comment.author.accountname) return true;
    else return false;
  };

  const getImage = () => {
    if (comment.author.image.indexOf(API_END_POINT) !== -1)
      return comment.author.image;
    else if (comment.author.image.length > 50)
      return `${API_END_POINT}/Ellipse.png`;
    else return `${API_END_POINT}/${comment.author.image}`;
  };

  return (
    <article className={styles.commentArticle}>
      <div className={styles.imgWrap}>
        <img className={styles.profileImg} src={getImage()} alt="" />
      </div>
      <div className={styles.contentsWrap}>
        <div className={styles.titleWrap}>
          <div className={styles.nameWrap}>
            <h2 className={styles.userName}>{comment.author.username}</h2>
            <p className={styles.elapsedTime}>{getElapsedTime()}</p>
          </div>
          <button className={styles.moreBtn} onClick={() => setModal(true)}>
            <img src="/images/publicImg/s-icon-more-vertical.png" alt="" />
          </button>
        </div>
        <p className={styles.content}>{comment.content}</p>
      </div>
      {modal ? (
        <CommentModal
          setModal={setModal}
          own={ownComment()}
          commentID={comment.id}
          postID={postID}
          token={token}
          hendleGetComments={hendleGetComments}
        />
      ) : (
        ""
      )}
    </article>
  );
};

export default CommentCard;
