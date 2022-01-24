import React, { useEffect, useRef, useState } from "react";
import { getCookie } from "../../util/cookie";
import { getMyInfo } from "../../util/fetcher";
import ProfileHeader from "./profileHeader";
import ProfileUpdateMain from "./profileUpdateMain";

const ProfileUpdate = () => {
  const [userInfo, setUserInfo] = useState();
  const token = getCookie("pic_token");
  const accountname = getCookie("pic_accountname");

  const userNameRef = useRef();
  const accountNameRef = useRef();
  const introRef = useRef();
  const imgRef = useRef();

  useEffect(() => {
    getMyInfo(accountname, token) //
      .then((res) => {
        setUserInfo(res.data.profile);
      });
  }, []);
  return (
    <>
      <ProfileHeader />
      {userInfo ? (
        <ProfileUpdateMain
          userInfo={userInfo}
          userNameRef={userNameRef}
          accountNameRef={accountNameRef}
          introRef={introRef}
          imgRef={imgRef}
        />
      ) : (
        "Loading..."
      )}
    </>
  );
};

export default ProfileUpdate;
