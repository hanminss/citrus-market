import React from "react";
import styles from "./productContainer.module.css";

const ProductContainer = ({ products }) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>판매 중인 상품</h2>
    </section>
  );
};

export default ProductContainer;
