import React, { useEffect, useRef, useState } from "react";
import { checkIdDuplication, profileUpload } from "../../util/fetcher";
import styles from "./profile.module.css";

const Profile = ({ setUserName, setAccountName, setIntro, setImgUrl }) => {
  const userNameRef = useRef();
  const accountNameRef = useRef();
  const introRef = useRef();
  const imgRef = useRef();
  const [profileImg, setProfileImg] = useState(
    "/images/profile/basic-profile-img.png"
  );

  const [userNameValid, setUserNameValid] = useState(null);
  const [accountNameFormat, setAccountNameFormat] = useState(null);
  const [accountNameDuple, setAccountNameDuple] = useState(null);
  const [introValid, setIntroValid] = useState(null);
  const [validPass, setValidPass] = useState(false);

  const handleImgPreView = (event) => {
    if (imgRef.current.files.length) {
      let reader = new FileReader();

      reader.onload = (event) => {
        setProfileImg(event.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
    } else {
      setProfileImg("/images/profile/basic-profile-img.png");
    }
  };

  const imgUpload = () => {
    if (imgRef.current.files.length) {
      profileUpload(imgRef.current.files).then((res) => {
        setImgUrl(res.data.filename);
      });
    }
  };

  const checkUserName = () =>
    userNameRef.current.value.length < 11 &&
    userNameRef.current.value.length > 1
      ? true
      : false;

  const handleUserNameValid = () => {
    if (checkUserName()) setUserNameValid(true);
    else setUserNameValid(false);
  };

  const checkAccountName = () => {
    const regExp = /^[a-zA-Z0-9._]*$/;
    const accountName = accountNameRef.current.value;

    return regExp.test(accountName) && accountName.length ? true : false;
  };

  const checkDuplication = () => {
    checkIdDuplication(accountNameRef.current.value).then((res) => {
      setAccountNameDuple(res);
    });
  };

  const handleAccountNameValid = () => {
    if (checkAccountName()) {
      setAccountNameFormat(true);
      checkDuplication();
    } else setAccountNameFormat(false);
  };

  const checkIntro = () => (introRef.current.value ? true : false);

  const handleCheckIntro = () => {
    if (checkIntro()) setIntroValid(true);
    else setIntroValid(false);
  };

  const handleSubmitData = () => {
    imgUpload();
    setTimeout(() => {
      setUserName(userNameRef.current.value);
      setAccountName(accountNameRef.current.value);
      setIntro(introRef.current.value);
    }, 100);
  };

  useEffect(() => {
    if (userNameValid && accountNameFormat && accountNameDuple && introValid)
      setValidPass(true);
    else setValidPass(false);
  }, [userNameValid, accountNameFormat, accountNameDuple, introValid]);

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>프로필 설정</h1>
      <p className={styles.title_desc}>나중에 언제든지 변경할 수 있습니다.</p>
      <form>
        <div className={styles.relative_wrap}>
          <div className={styles.border_wrap}>
            <img
              className={styles.img_profile}
              src={profileImg}
              alt="프로필 이미지"
            />
          </div>
          <label htmlFor="uploadImg">
            <img
              className={styles.img_upload_btn}
              src="/images/profile/upload-file.png"
              alt=""
            />
          </label>
          <input
            ref={imgRef}
            type="file"
            id="uploadImg"
            accept="image/*"
            onChange={handleImgPreView}
            hidden
          />
        </div>
        {/*  */}
        <div className={styles.input_wrap}>
          <label className={styles.label} htmlFor="userName">
            사용자 이름
          </label>
          <input
            type="text"
            ref={userNameRef}
            className={styles.input}
            id="userName"
            placeholder="2~10자 이내여야 합니다."
            onBlur={handleUserNameValid}
          />
          <p className={styles.err_msg}>
            {userNameValid == null
              ? ""
              : !userNameValid
              ? "*사용자 이름은 2~10자 이내여야 합니다."
              : ""}
          </p>
        </div>
        {/*  */}
        <div className={styles.input_wrap}>
          <label className={styles.label} htmlFor="accountName">
            계정 ID
          </label>
          <input
            type="text"
            ref={accountNameRef}
            className={styles.input}
            id="accountName"
            placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
            onBlur={handleAccountNameValid}
          />
          <p className={styles.err_msg}>
            {accountNameFormat == null
              ? ""
              : !accountNameFormat
              ? "*영문, 숫자, 밑줄 및 마침표만 사용할 수 있습니다."
              : accountNameDuple == null
              ? ""
              : !accountNameDuple
              ? "*이미 존재하는 아이디 입니다."
              : ""}
          </p>
        </div>
        {/*  */}
        <div className={styles.input_wrap}>
          <label className={styles.label} htmlFor="intro">
            소개
          </label>
          <input
            type="text"
            ref={introRef}
            className={styles.input}
            id="intro"
            placeholder="자신과 판매할 상품에 대해 소개해 주세요!"
            onBlur={handleCheckIntro}
          />
          <p className={styles.err_msg}>
            {introValid == null
              ? ""
              : !introValid
              ? "*소개를 입력해 주세요."
              : ""}
          </p>
        </div>
        {validPass ? (
          <button
            className={`${styles.btn_submit} ${styles.activate}`}
            type="button"
            onClick={handleSubmitData}
          >
            PIC 시작하기
          </button>
        ) : (
          <button className={styles.btn_submit} type="button" disabled>
            PIC 시작하기
          </button>
        )}
      </form>
    </main>
  );
};

export default Profile;
