import React, { useEffect, useState } from "react";
import styles from "./productMain.module.css";

const ProductMain = ({ nameRef, priceRef, linkRef, imgRef, setValidPass }) => {
  const [imgPath, setImgPath] = useState("/images/product/default.png");
  const [nameValid, setNameValid] = useState(null);
  const [priceValid, setPriceValid] = useState(false);
  const [linkValid, setLinkValid] = useState(false);
  const [imgValid, setImgValid] = useState(false);

  const setPreView = (event) => {
    if (imgRef.current.files.length) {
      let reader = new FileReader();

      reader.onload = (event) => {
        setImgPath(event.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
      setImgValid(true);
    } else {
      setImgPath("/images/product/default.png");
      setImgValid(false);
    }
  };

  const handleCheckName = () => {
    if (nameRef.current.value.length > 1 && nameRef.current.value.length < 16)
      setNameValid(true);
    else setNameValid(false);
  };

  const checkPrice = () => {
    const regExp = /[^0-9,]/g;
    if (regExp.test(priceRef.current.value)) {
      priceRef.current.value = priceRef.current.value.replace(regExp, "");
    }
    checkPriceLength();
  };

  const changePriceForm = () => {
    // priceN = priceRef.current.value.replace(/,/g, "") * 1;
    let arr = priceRef.current.value.replace(/,/g, "").split("").reverse();
    let count =
      arr.length % 3 === 0
        ? parseInt(arr.length / 3) - 1
        : parseInt(arr.length / 3);

    for (let i = 1; i <= count; i++) {
      arr.splice(3 * i + (i - 1), 0, ",");
    }
    priceRef.current.value = arr.reverse().join("");
  };

  const checkPriceLength = () => {
    if (priceRef.current.value.length === 0) setPriceValid(false);
    else setPriceValid(true);
  };

  const checkLinkLength = () => {
    if (linkRef.current.value.length === 0) setLinkValid(false);
    else setLinkValid(true);
  };

  useEffect(() => {
    if (nameValid && priceValid && linkValid && imgValid) {
      setValidPass(true);
    } else setValidPass(false);
  }, [nameValid, priceValid, linkValid, imgValid, setValidPass]);

  return (
    <main className={styles.main}>
      <h1 className={styles.img_title}>이미지 등록</h1>
      <div className={styles.relative_wrap}>
        <img
          className={styles.img_product}
          src={imgPath}
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
        <input
          type="file"
          id="product_img"
          hidden
          accept="image/*"
          ref={imgRef}
          onChange={setPreView}
        />
      </div>
      <div className={styles.input_wrap}>
        <label htmlFor="itemName">상품명</label>
        <input
          type="text"
          id="itemName"
          name="itemName"
          placeholder="2~15자 이내여야 합니다."
          ref={nameRef}
          onInput={handleCheckName}
        />
        <p className={styles.err_msg}>
          {nameValid === null
            ? ""
            : nameValid
            ? ""
            : "*상품명은 2~15자 이내여야 합니다."}
        </p>
      </div>
      <div className={styles.input_wrap}>
        <label htmlFor="price">가격</label>
        <input
          type="text"
          id="price"
          name="price"
          placeholder="숫자만 입력 가능합니다."
          ref={priceRef}
          onInput={checkPrice}
          onBlur={changePriceForm}
        />
      </div>
      <div className={styles.input_wrap}>
        <label htmlFor="link">판매 링크</label>
        <input
          type="text"
          id="link"
          name="link"
          placeholder="URL을 입력해 주세요."
          ref={linkRef}
          onInput={checkLinkLength}
        />
      </div>
    </main>
  );
};

export default ProductMain;
