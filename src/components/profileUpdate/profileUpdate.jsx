import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCookie, setCookie } from "../../util/cookie";
import { getMyInfo, profileUpload, putProfile } from "../../util/fetcher";
import ProfileHeader from "./profileHeader";
import ProfileUpdateMain from "./profileUpdateMain";

const ProfileUpdate = () => {
  const [userInfo, setUserInfo] = useState();
  const [validPass, setValidPass] = useState(true);
  const token = getCookie("pic_token");
  const accountname = getCookie("pic_accountname");

  const userNameRef = useRef();
  const accountNameRef = useRef();
  const introRef = useRef();
  const imgRef = useRef();

  const navigate = useNavigate();

  const imgUpload = async () => {
    return await profileUpload(imgRef.current.files).then((res) => {
      return res.data.filename;
    });
  };

  const updateProfile = () => {
    if (imgRef.current.files.length) {
      imgUpload() //
        .then((res) => {
          putProfile(
            {
              user: {
                username: userNameRef.current.value,
                accountname: accountNameRef.current.value,
                intro: introRef.current.value,
                image: res,
              },
            },
            token
          ) //
            .then((res) => {
              setCookie("pic_accountname", res.data.user.accountname);
              setCookie("pic_profile", res.data.user.image);
              alert("프로필을 성공적으로 변경하였습니다.");
              navigate("/mypage");
            });
        });
    } else {
      putProfile(
        {
          user: {
            username: userNameRef.current.value,
            accountname: accountNameRef.current.value,
            intro: introRef.current.value,
            image: userInfo.image,
          },
        },
        token
      ).then((res) => {
        setCookie("pic_accountname", res.data.user.accountname);
        setCookie("pic_profile", res.data.user.image);
        alert("프로필을 성공적으로 변경하였습니다.");
        navigate("/mypage");
      });
    }
  };

  useEffect(() => {
    getMyInfo(accountname, token) //
      .then((res) => {
        setUserInfo(res.data.profile);
      });
  }, []);

  return (
    <>
      <ProfileHeader
        validPass={validPass}
        updateProfile={updateProfile}
        navigate={navigate}
      />
      {userInfo ? (
        <ProfileUpdateMain
          userInfo={userInfo}
          userNameRef={userNameRef}
          accountNameRef={accountNameRef}
          introRef={introRef}
          imgRef={imgRef}
          setValidPass={setValidPass}
        />
      ) : (
        "Loading..."
      )}
    </>
  );
};

export default ProfileUpdate;
