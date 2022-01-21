import React, { useEffect, useState } from "react";
import { getMyPosts } from "../../util/fetcher";
import PostCard from "./postCard";
import styles from "./postSection.module.css";

const PostSection = ({ token, accountname }) => {
  const [posts, setPosts] = useState();
  useEffect(() => {
    getMyPosts(accountname, token)
      .then((res) => {
        setPosts(res.data.post);
      })
      .catch((err) => {
        alert("err: ", err);
      });
  }, []);
  return (
    <section>
      <nav className={styles.post_nav}>
        <img
          src="/images/mypage/icon-post-album-off.png"
          alt="게시글 앨범형으로 보기"
        />
        <img
          src="/images/mypage/icon-post-list-on.png"
          alt="게시글 목록으로 보기"
        />
      </nav>

      <div className={styles.postList}>
        {posts ? (
          <>
            <PostCard post={posts[0]} />
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </section>
  );
};

export default PostSection;
