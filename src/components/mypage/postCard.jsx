import React, { useState } from "react";
import { Link } from "react-router-dom";
import { API_END_POINT } from "../../constants";
import { heartPost, unHeartPost } from "../../util/fetcher";
import styles from "./postCard.module.css";

const PostCard = ({ post, handleModal, token }) => {
  const [year, month, day] = post.createdAt.slice(0, 10).split("-");
  const [hearted, setHearted] = useState(post.hearted);
  const [heartCount, setHeartCount] = useState(post.heartCount);

  const handleHart = () => {
    if (hearted) {
      unHeartPost(post.id, token) //
        .then((res) => {
          if (res.data.post) {
            setHearted(false);
            setHeartCount(heartCount - 1);
          } else {
            alert("server err");
          }
        }) //
        .catch(() => alert("Network err"));
    } else {
      heartPost(post.id, token) //
        .then((res) => {
          if (res.data.post) {
            setHearted(true);
            setHeartCount(heartCount + 1);
          } else {
            alert("server err");
          }
        }) //
        .catch(() => alert("Network err"));
    }
  };
  return (
    <article className={styles.post_card}>
      <div className={styles.img_wrap}>
        <img
          className={styles.profileImg}
          src={`${API_END_POINT}/${post.author.image}`}
          alt=""
        />
      </div>
      <div>
        <div className={styles.flex_wrap}>
          <div>
            <h2 className={styles.authorName}>{post.author.username}</h2>
            <p className={styles.authorID}>@{post.author.accountname}</p>
          </div>
          <button onClick={() => handleModal(post.id)}>
            <img src="/images/publicImg/s-icon-more-vertical.png" alt="" />
          </button>
        </div>
        <p className={styles.content}>{post.content}</p>
        <div className={styles.postImg_wrap}>
          {!post.image ? (
            ""
          ) : post.image.split(",").length === 1 ? (
            <img
              className={styles.single_img}
              src={`${API_END_POINT}/${post.image}`}
              alt=""
            />
          ) : (
            post.image.split(",").map((item, key) => {
              return (
                <img
                  key={key}
                  className={styles.multi_img}
                  src={`${API_END_POINT}/${item}`}
                  alt=""
                />
              );
            })
          )}
        </div>
        <div className={styles.button_wrap}>
          <img
            src={`/images/mypage/icon-heart${hearted ? "-active" : ""}.png`}
            alt="좋아요 누르기"
            onClick={handleHart}
          />
          <span>{heartCount}</span>
          <Link className={styles.block_a} to={`/post/${post.id}`}>
            <img src="/images/mypage/icon-message-circle.png" alt="" />
          </Link>
          <span>{post.commentCount}</span>
        </div>
        <p className={styles.date}>{`${year}년 ${month}월 ${day}일`}</p>
      </div>
    </article>
  );
};

export default PostCard;
