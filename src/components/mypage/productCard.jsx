import React from "react";
import styles from "./productCard.module.css";
import { API_END_POINT } from "../../constants";

const ProductCard = ({ product }) => {
  const changePriceForm = () => {
    let arr = (product.price + "").split("").reverse();
    let count =
      arr.length % 3 === 0
        ? parseInt(arr.length / 3) - 1
        : parseInt(arr.length / 3);

    for (let i = 1; i <= count; i++) {
      arr.splice(3 * i + (i - 1), 0, ",");
    }
    return arr.reverse().join("");
  };

  const changeTitleForm = () => {
    if (product.itemName.length > 10) {
      return product.itemName.slice(0, 10) + "...";
    } else return product.itemName;
  };

  const getImage = () => {
    if (product.itemImage.indexOf(API_END_POINT) !== -1)
      return product.itemImage;
    else if (product.itemImage.length > 50)
      return `${API_END_POINT}/Ellipse.png`;
    else return `${API_END_POINT}/${product.itemImage}`;
  };

  return (
    <article>
      <div className={styles.imgWrap}>
        <img src={getImage()} alt="" />
      </div>
      <h3 className={styles.title}>{changeTitleForm()}</h3>
      <p className={styles.price}>{changePriceForm()}원</p>
    </article>
  );
};

export default ProductCard;
