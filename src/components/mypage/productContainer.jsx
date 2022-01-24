import React from "react";
import ProductCard from "./productCard";
import styles from "./productContainer.module.css";

const ProductContainer = ({ products }) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>판매 중인 상품</h2>
      <div className={styles.productWrap}>
        {products.map((item, idx) => {
          return <ProductCard key={`key-${idx}`} product={item} />;
        })}
      </div>
    </section>
  );
};

export default ProductContainer;
