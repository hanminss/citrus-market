import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { getCookie } from "../../util/cookie";
import { deletePost, getMyInfo } from "../../util/fetcher";
import ThreeDotHeader from "../modules/header/threeDotHeader";
import Menu from "../modules/menu/menu";
import MyPageInfo from "./myPageInfo";
import styles from "./mypage.module.css";
import PostSection from "./postSection";
import PostModal from "../modules/modal/postModal";

const Mypage = () => {
  const accoutName = getCookie("pic_accountname");
  const token = getCookie("pic_token");
  const [myInfo, setMyInfo] = useState();
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

  const postDelete = () => {
    deletePost(selectedPost, token)
      .then((res) => {
        if (res.data.message === "삭제되었습니다.") {
          setSelectedPost("");
          setModal(false);
        }
      })
      .catch((err) => alert(err));
  };

  useEffect(() => {
    getMyInfo(accoutName, token).then((res) => {
      setMyInfo(res.data.profile);
    });
  }, []);

  return (
    <>
      <ThreeDotHeader />
      <Menu />
      <main className={styles.mypage_main}>
        {myInfo ? (
          <>
            <MyPageInfo myInfo={myInfo} />
            <PostSection
              accountname={myInfo.accountname}
              token={token}
              handleModal={handleModal}
              selectedPost={selectedPost}
            />
          </>
        ) : (
          <p>Loading....</p>
        )}
      </main>
      {modal ? (
        <PostModal handleModal={handleModal} postDelete={postDelete} />
      ) : (
        ""
      )}
    </>
  );
};

export default Mypage;
