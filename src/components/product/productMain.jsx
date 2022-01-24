import React from "react";
import styles from "./productMain.module.css";

const ProductMain = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.img_title}>이미지 등록</h1>
      <div className={styles.relative_wrap}>
        <img
          className={styles.img_product}
          src="/images/product/default.png"
          alt="product-img"
          accept="image/*"
        />
        <label htmlFor="product_img">
          <img
            className={styles.img_upload_btn}
            src="/images/product/img-button.png"
            alt="product_img"
          />
        </label>
        <input type="file" id="product_img" hidden accept="image/*" />
      </div>
      <div className={styles.input_wrap}>
        <label htmlFor="itemName">상품명</label>
        <input
          type="text"
          id="itemName"
          name="itemName"
          placeholder="2~15자 이내여야 합니다."
        />
        <p className={styles.err_msg}></p>
      </div>
      <div className={styles.input_wrap}>
        <label htmlFor="price">가격</label>
        <input
          type="text"
          id="price"
          name="price"
          placeholder="숫자만 입력 가능합니다."
        />
        <p className={styles.err_msg}></p>
      </div>
      <div className={styles.input_wrap}>
        <label htmlFor="link">판매 링크</label>
        <input
          type="text"
          id="link"
          name="link"
          placeholder="URL을 입력해 주세요."
        />
        <p className={styles.err_msg}></p>
      </div>
    </main>
  );
};

export default ProductMain;
