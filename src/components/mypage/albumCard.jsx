import React from "react";
import styles from "./albumCard.module.css";
const AlbumCard = ({ post }) => {
  const imgArr = post.image.split(",");
  return (
    <div className={styles.img_wrap}>
      <img
        className={styles.albumImg}
        src={`http://146.56.183.55:5050/${imgArr[0]}`}
        alt=""
      />
      {imgArr.length > 1 ? (
        <img
          className={styles.layer}
          src="/images/mypage/iccon-img-layers.png"
          alt=""
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default AlbumCard;
