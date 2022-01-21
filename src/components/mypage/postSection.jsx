import React from "react";
import styles from "./postSection.module.css";

const PostSection = () => {
  return (
    <section>
      <nav class={styles.post_nav}>
        <img
          src="/images/mypage/icon-post-album-off.png"
          alt="게시글 앨범형으로 보기"
        />
        <img
          src="/images/mypage/icon-post-list-on.png"
          alt="게시글 목록으로 보기"
        />
      </nav>
    </section>
  );
};

export default PostSection;
