import React from "react";
import styles from "./myPageInfo.module.css";

const MyPageInfo = ({ myInfo }) => {
  return (
    <section className={styles.prfileSection}>
      <div className={styles.profile_wrap}>
        <div>
          <p className={styles.profile_num}>{myInfo.followerCount}</p>
          <p className={styles.profile_txt}>followers</p>
        </div>
        <div className={styles.profile_img}>
          <img
            src={`http://146.56.183.55:5050/${myInfo.image}`}
            alt="프로필 이미지"
            id="profile-img"
          />
        </div>
        <div>
          <p className={styles.profile_num}>{myInfo.followingCount}</p>
          <p className={styles.profile_txt}>followings</p>
        </div>
      </div>

      <div className={styles.profile_container}>
        <p className={styles.profile_name}>{myInfo.username}</p>
        <p className={styles.profile_id}>@{myInfo.accountname}</p>
        <p className={styles.profile_info}>{myInfo.intro}</p>
      </div>
      <div className={styles.profile_link}>
        <button type="button" className="follow-btn">
          프로필 수정
        </button>
        <button type="button" className="follow-btn">
          상품 등록
        </button>
      </div>
    </section>
  );
};

export default MyPageInfo;
