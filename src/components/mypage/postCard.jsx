import React from "react";
import styles from "./postCard.module.css";

const PostCard = ({ post }) => {
  console.log(post);
  const [year, month, day] = post.createdAt.slice(0, 10).split("-");
  return (
    <article className={styles.post_card}>
      <div className={styles.img_wrap}>
        <img
          className={styles.profileImg}
          src={`http://146.56.183.55:5050/${post.author.image}`}
          alt=""
        />
      </div>
      <div>
        <h2 className={styles.authorName}>{post.author.username}</h2>
        <p className={styles.authorID}>@{post.author.accountname}</p>
        <p className={styles.content}>{post.content}</p>
        <div className={styles.postImg_wrap}>
          {post.image.split(",").map((item, key) => {
            return (
              <img
                key={key}
                className={styles.single_img}
                src={`http://146.56.183.55:5050/${item}`}
                alt=""
              />
            );
          })}
        </div>
        <div className={styles.button_wrap}>
          <img src="/images/mypage/icon-heart.png" alt="좋아요 누르기" />
          <span>{post.heartCount}</span>
          <img src="/images/mypage/icon-message-circle.png" alt="" />
          <span>{post.commentCount}</span>
        </div>
        <p className={styles.date}>{`${year}년 ${month}월 ${day}일`}</p>
      </div>
    </article>
  );
};

export default PostCard;
