import React from "react";
import { Link } from "react-router-dom";
import { API_END_POINT } from "../../constants";
import styles from "./albumCard.module.css";
const AlbumCard = ({ post }) => {
  const imgArr = post.image.split(",");
  const getImage = () => {
    if (imgArr[0].indexOf(API_END_POINT) !== -1) return imgArr[0];
    else if (imgArr[0].length > 50) return `${API_END_POINT}/Ellipse.png`;
    else return `${API_END_POINT}/${imgArr[0]}`;
  };

  return (
    <Link to={`/post/${post.id}`}>
      <div className={styles.img_wrap}>
        <img className={styles.albumImg} src={getImage()} alt="" />
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
    </Link>
  );
};

export default AlbumCard;
