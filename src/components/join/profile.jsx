import React, { useRef, useState } from "react";
import styles from "./profile.module.css";

const Profile = () => {
  const userNameRef = useRef();
  const accountNameRef = useRef();
  const introRef = useRef();
  const [profileImg, setProfileImg] = useState(
    "/images/profile/basic-profile-img.png"
  );

  const handleImgPreView = (event) => {
    let reader = new FileReader();

    reader.onload = (event) => {
      setProfileImg(event.target.result);
    };
    reader.readAsDataURL(event.target.files[0]);
  };
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
            type="file"
            id="uploadImg"
            accept="image/*"
            hidden
            onChange={handleImgPreView}
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
          />
          <p className={styles.err_msg}></p>
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
          />
          <p className={styles.err_msg}></p>
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
          />
          <p className={styles.err_msg}></p>
        </div>
        <button className={styles.btn_submit} type="button" disabled>
          PIC 시작하기
        </button>
      </form>
    </main>
  );
};

export default Profile;
