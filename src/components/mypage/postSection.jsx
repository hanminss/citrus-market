import React, { useEffect, useState } from "react";
import { getMyPosts } from "../../util/fetcher";
import AlbumCard from "./albumCard";
import PostCard from "./postCard";
import styles from "./postSection.module.css";

const PostSection = ({ token, accountname, handleModal, selectedPost }) => {
  const [posts, setPosts] = useState();
  const [viewType, setViewType] = useState(true);
  useEffect(() => {
    getMyPosts(accountname, token)
      .then((res) => {
        setPosts(res.data.post);
      })
      .catch((err) => {
        alert("err: ", err);
      });
  }, [selectedPost]);
  return (
    <section>
      <nav className={styles.post_nav}>
        <button onClick={() => setViewType(true)}>
          <img
            src={`/images/mypage/icon-post-list-${viewType ? "on" : "off"}.png`}
            alt="게시글 목록으로 보기"
          />
        </button>
        <button onClick={() => setViewType(false)}>
          <img
            src={`/images/mypage/icon-post-album-${
              viewType ? "off" : "on"
            }.png`}
            alt="게시글 앨범형으로 보기"
          />
        </button>
      </nav>

      {posts ? (
        viewType ? (
          <div className={styles.postList}>
            {posts.map((post, idx) => {
              return (
                <PostCard
                  key={`post-key-${idx}`}
                  post={post}
                  handleModal={handleModal}
                />
              );
            })}
          </div>
        ) : (
          <div className={styles.albumList}>
            {posts.map((post, idx) => {
              if (post.image) {
                return <AlbumCard key={`key-${idx}`} post={post} />;
              }
              return "";
            })}
          </div>
        )
      ) : (
        "Loading..."
      )}
    </section>
  );
};

export default PostSection;
