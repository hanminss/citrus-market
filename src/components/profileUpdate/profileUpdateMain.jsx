import React, { useEffect, useState } from "react";
import { API_END_POINT } from "../../constants";
import { checkIdDuplication } from "../../util/fetcher";
import styles from "./profileUpdateMain.module.css";
const ProfileUpdateMain = ({
  userInfo,
  setValidPass,
  userNameRef,
  accountNameRef,
  introRef,
  imgRef,
}) => {
  const [profileImg, setProfileImg] = useState(
    API_END_POINT + "/" + userInfo.image
  );
  const [accountDuplication, setAccountDuplication] = useState(true);
  const [accountFormat, setAccountFormat] = useState(true);
  const [userNameValid, setUserNameValid] = useState(true);
  const [introValid, setIntroValid] = useState(true);

  useEffect(() => {
    if (accountDuplication && accountFormat && userNameValid && introValid) {
      setValidPass(true);
    } else {
      setValidPass(false);
    }
  }, [
    accountDuplication,
    accountFormat,
    userNameValid,
    introValid,
    setValidPass,
  ]);

  const handleImgPreView = (event) => {
    if (imgRef.current.files.length) {
      let reader = new FileReader();

      reader.onload = (event) => {
        setProfileImg(event.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
    } else {
      setProfileImg(API_END_POINT + "/" + userInfo.image);
    }
  };

  const checkAccountName = () => {
    if (userInfo.accountname === accountNameRef.current.value)
      setAccountDuplication(true);
    else {
      checkIdDuplication(accountNameRef.current.value) //
        .then((res) => {
          setAccountDuplication(res);
        });
    }
  };

  const checkAccountFormat = () => {
    const regExp = /^[a-zA-Z0-9._]*$/;
    const accountName = accountNameRef.current.value;
    if (regExp.test(accountName) && accountName.length) {
      setAccountFormat(true);
    } else {
      setAccountFormat(false);
    }
  };

  const handleCheckAccount = () => {
    checkAccountFormat();
    checkAccountName();
  };

  const handleUserName = () => {
    if (
      userNameRef.current.value.length > 1 &&
      userNameRef.current.value.length < 11
    )
      setUserNameValid(true);
    else setUserNameValid(false);
  };

  const handleIntro = () => {
    if (introRef.current.value.length === 0) setIntroValid(false);
    else setIntroValid(true);
  };

  return (
    <main className={styles.main}>
      <div className={styles.relative_wrap}>
        <div className={styles.border_wrap}>
          <img
            className={styles.img_profile}
            src={`${profileImg}`}
            alt="profile-img"
            accept="image/*"
          />
        </div>

        <label className={styles.label} htmlFor="img_profile">
          <img
            className={styles.img_upload_btn}
            src="/images/publicImg/upload-file.png"
            alt="profile-img"
          />
        </label>
        <input
          className={styles.input}
          type="file"
          id="img_profile"
          hidden
          accept="image/*"
          ref={imgRef}
          onChange={handleImgPreView}
        />
      </div>

      <div className={styles.input_wrap}>
        <label className={styles.label} htmlFor="userName">
          ????????? ??????
        </label>
        <input
          className={styles.input}
          type="text"
          id="userName"
          name="userName"
          placeholder="2~10??? ???????????? ?????????."
          defaultValue={userInfo.username}
          ref={userNameRef}
          onBlur={handleUserName}
        />
        <p className={styles.err_msg}>
          {userNameValid == null
            ? ""
            : !userNameValid
            ? "*????????? ????????? 2~10??? ???????????? ?????????."
            : ""}
        </p>
      </div>

      <div className={styles.input_wrap}>
        <label className={styles.label} htmlFor="userID">
          ?????? ID
        </label>
        <input
          className={styles.input}
          type="text"
          id="userID"
          name="userID"
          placeholder="??????, ??????, ????????????(.),(_)??? ?????? ???????????????."
          defaultValue={userInfo.accountname}
          ref={accountNameRef}
          onBlur={handleCheckAccount}
        />
        <p className={styles.err_msg}>
          {accountFormat == null
            ? ""
            : !accountFormat
            ? "*??????, ??????, ?????? ??? ???????????? ????????? ??? ????????????."
            : accountDuplication == null
            ? ""
            : !accountDuplication
            ? "*?????? ???????????? ????????? ?????????."
            : ""}
        </p>
      </div>

      <div className={styles.input_wrap}>
        <label className={styles.label} htmlFor="userDesc">
          ??????
        </label>
        <input
          className={styles.input}
          type="text"
          id="userDesc"
          name="userDesc"
          placeholder="????????? ????????? ????????? ?????? ????????? ?????????!"
          defaultValue={userInfo.intro}
          ref={introRef}
          onBlur={handleIntro}
        />
        <p className={styles.err_msg}>
          {introValid == null
            ? ""
            : !introValid
            ? "*????????? ????????? ?????????."
            : ""}
        </p>
      </div>
    </main>
  );
};

export default ProfileUpdateMain;
