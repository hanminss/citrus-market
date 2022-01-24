import React from "react";
import styles from "./profileUpdateMain.module.css";
const ProfileUpdateMain = ({
  userInfo,
  userNameRef,
  accountNameRef,
  introRef,
  imgRef,
}) => {
  return (
    <main className={styles.main}>
      <div className={styles.relative_wrap}>
        <div className={styles.border_wrap}>
          <img
            className={styles.img_profile}
            src={`http://146.56.183.55:5050/${userInfo.image}`}
            alt="profile-img"
            accept="image/*"
          />
        </div>

        <label htmlFor="img_profile">
          <img
            className={styles.img_upload_btn}
            src="/images/publicImg/upload-file.png"
            alt="profile-img"
          />
        </label>
        <input
          type="file"
          id="img_profile"
          hidden
          accept="image/*"
          ref={imgRef}
        />
      </div>

      <div className={styles.input_wrap}>
        <label htmlFor="userName">사용자 이름</label>
        <input
          type="text"
          id="userName"
          name="userName"
          placeholder="2~10자 이내여야 합니다."
          defaultValue={userInfo.username}
          ref={userNameRef}
        />
        <p className={styles.err_msg}></p>
      </div>

      <div className={styles.input_wrap}>
        <label htmlFor="userID">계정 ID</label>
        <input
          type="text"
          id="userID"
          name="userID"
          placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
          defaultValue={userInfo.accountname}
          ref={accountNameRef}
        />
        <p className={styles.err_msg}></p>
      </div>

      <div className={styles.input_wrap}>
        <label htmlFor="userDesc">소개</label>
        <input
          type="text"
          id="userDesc"
          name="userDesc"
          placeholder="자신과 판매할 상품에 대해 소개해 주세요!"
          defaultValue={userInfo.intro}
          ref={introRef}
        />
        <p className={styles.err_msg}></p>
      </div>
    </main>
  );
};

export default ProfileUpdateMain;
