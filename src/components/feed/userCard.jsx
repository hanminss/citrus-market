import React from "react";
import styles from "./userCard.module.css";
import { API_END_POINT } from "../../constants";

const UserCard = ({ user, keyword = 0 }) => {
  const getImage = () => {
    if (user.image.indexOf(API_END_POINT) !== -1) return user.image;
    else if (user.image.length > 50) return `${API_END_POINT}/Ellipse.png`;
    else return `${API_END_POINT}/${user.image}`;
  };

  const keyWordHighlight = (name, type) => {
    const start = name.indexOf(keyword);
    const end = keyword.length + start;

    const first = name.slice(0, start);
    const mid = name.slice(start, end);
    const last = name.slice(end);

    if (type)
      return (
        <h2 className={styles.userName}>
          {first}
          <span className={styles.keyWord}>{mid}</span>
          {last}
        </h2>
      );
    else
      return (
        <p className={styles.accountName}>
          {first}
          <span className={styles.keyWord}>{mid}</span>
          {last}
        </p>
      );
  };

  return (
    <article className={styles.userCard}>
      <div className={styles.img_wrap}>
        <img className={styles.profileImg} src={getImage()} alt="" />
      </div>
      <div>
        {keyWordHighlight(user.username, true)}
        {keyWordHighlight(user.accountname, false)}
      </div>
    </article>
  );
};

export default UserCard;
