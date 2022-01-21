import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { getCookie } from "../../util/cookie";
import { getMyInfo } from "../../util/fetcher";
import ThreeDotHeader from "../modules/header/threeDotHeader";
import Menu from "../modules/menu/menu";
import MyPageInfo from "./myPageInfo";
import styles from "./mypage.module.css";
import PostSection from "./postSection";

const Mypage = () => {
  const accoutName = getCookie("pic_accountname");
  const token = getCookie("pic_token");
  const [myInfo, setMyInfo] = useState();

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
            <PostSection accountname={myInfo.accountname} token={token} />
          </>
        ) : (
          <p>Loading....</p>
        )}
      </main>
    </>
  );
};

export default Mypage;
