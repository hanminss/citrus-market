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

  return (
    <article>
      <div className={styles.imgWrap}>
        <img src={`${API_END_POINT}/${product.itemImage}`} alt="" />
      </div>
      <h3 className={styles.title}>{changeTitleForm()}</h3>
      <p className={styles.price}>{changePriceForm()}원</p>
    </article>
  );
};

export default ProductCard;
