import React from "react";
import PostCard from "../mypage/postCard";
import styles from "./haveFollow.module.css";

const HaveFollow = ({ feedPost, token }) => {
  return (
    <main className={styles.main}>
      {feedPost.map((item, idx) => (
        <PostCard
          post={item}
          handleModal={() => console.log("x")}
          token={token}
          key={`key-${idx}`}
        />
      ))}
    </main>
  );
};
export default HaveFollow;
