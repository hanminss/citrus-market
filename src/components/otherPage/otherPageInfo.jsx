import React, { useState } from "react";
import { API_END_POINT } from "../../constants";
import { followUser, unFollowUser } from "../../util/fetcher";
import styles from "./otherPageInfo.module.css";

const OtherPageInfo = ({ userInfo, token, accountname }) => {
  const [follow, setFollow] = useState(userInfo.isfollow);
  const [follower, setFollower] = useState(userInfo.followerCount);

  const getImage = () => {
    if (userInfo.image.indexOf(API_END_POINT) !== -1) return userInfo.image;
    else if (userInfo.image.length > 50) return `${API_END_POINT}/Ellipse.png`;
    else return `${API_END_POINT}/${userInfo.image}`;
  };

  const handleFollow = () => {
    followUser(accountname, token) //
      .catch((err) => alert(err))
      .then(() => {
        setFollow(true);
        setFollower(follower + 1);
      });
  };

  const handleUnFollow = () => {
    unFollowUser(accountname, token) //
      .catch((err) => alert(err))
      .then(() => {
        setFollow(false);
        setFollower(follower - 1);
      });
  };
  return (
    <section className={styles.prfileSection}>
      <div className={styles.profile_wrap}>
        <div>
          <p className={styles.profile_num}>{follower}</p>
          <p className={styles.profile_txt}>followers</p>
        </div>
        <div className={styles.profile_img}>
          <img src={getImage()} alt="프로필 이미지" id="profile-img" />
        </div>
        <div>
          <p className={styles.profile_num}>{userInfo.followingCount}</p>
          <p className={styles.profile_txt}>followings</p>
        </div>
      </div>

      <div className={styles.profile_container}>
        <p className={styles.profile_name}>{userInfo.username}</p>
        <p className={styles.profile_id}>@{userInfo.accountname}</p>
        <p className={styles.profile_info}>{userInfo.intro}</p>
      </div>
      <div className={styles.profile_link}>
        <div className={styles.iconWrap}>
          <img
            className={styles.iconImg}
            src="/images/otherpage/icon-message-circle.png"
            alt=""
          />
        </div>
        {follow ? (
          <button
            className={styles.unfollow}
            type="button"
            onClick={handleUnFollow}
          >
            언팔로우
          </button>
        ) : (
          <button
            className={styles.follow}
            type="button"
            onClick={handleFollow}
          >
            팔로우
          </button>
        )}
        <div className={styles.iconWrap}>
          <img
            className={styles.iconImg}
            src="/images/otherpage/icon-share.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default OtherPageInfo;
