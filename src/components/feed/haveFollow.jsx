import React, { useState } from "react";
import { reportPost } from "../../util/fetcher";
import PostModal from "../modules/modal/postModal";
import PostCard from "../mypage/postCard";
import styles from "./haveFollow.module.css";

const HaveFollow = ({ feedPost, token }) => {
  const [modal, setModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState("");

  const handleModal = (id) => {
    if (modal) {
      setModal(false);
      document.body.style.overflow = "unset";
    } else {
      setModal(true);
      document.body.style.overflow = "hidden";
    }
    setSelectedPost(id);
  };

  const handleReportPost = () => {
    reportPost(token, selectedPost) //
      .then(() => alert("신고가 완료되었습니다."))
      .catch((err) => alert(err))
      .then(() => {
        setSelectedPost("");
        setModal(false);
        document.body.style.overflow = "unset";
      });
  };

  return (
    <>
      <main className={styles.main}>
        {feedPost.map((item, idx) => (
          <PostCard
            post={item}
            handleModal={handleModal}
            token={token}
            key={`key-${idx}`}
          />
        ))}
      </main>
      {modal ? (
        <PostModal
          handleModal={handleModal}
          author={true}
          handleReportPost={handleReportPost}
        />
      ) : (
        ""
      )}
    </>
  );
};
export default HaveFollow;
