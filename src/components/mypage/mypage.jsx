import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { getCookie } from "../../util/cookie";
import { getMyInfo } from "../../util/fetcher";
import ThreeDotHeader from "../modules/header/threeDotHeader";
import Menu from "../modules/menu/menu";
import MyPageInfo from "./myPageInfo";

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
      <main>
        {myInfo ? <MyPageInfo myInfo={myInfo} /> : <p>Loading....</p>}
      </main>
    </>
  );
};

export default Mypage;
