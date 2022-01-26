import React from "react";
import { getCookie } from "../../util/cookie";
import CommentCard from "./commentCard";
import styles from "./commentSection.module.css";

const CommentSection = ({ commentData, postID, token, hendleGetComments }) => {
  const accountName = getCookie("pic_accountname");
  return (
    <section className={styles.commentSection}>
      {commentData.map((item, idx) => {
        return (
          <CommentCard
            key={`key-comment-${idx}`}
            comment={item}
            accountName={accountName}
            postID={postID}
            token={token}
            hendleGetComments={hendleGetComments}
          />
        );
      })}
    </section>
  );
};

export default CommentSection;
