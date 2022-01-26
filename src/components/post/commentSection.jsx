import React from "react";
import CommentCard from "./commentCard";
import styles from "./commentSection.module.css";

const CommentSection = ({ commentData }) => {
  return (
    <section className={styles.commentSection}>
      {commentData.map((item, idx) => {
        return <CommentCard key={`key-comment-${idx}`} comment={item} />;
      })}
    </section>
  );
};

export default CommentSection;
