import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../../util/cookie";
import { addProduct, profileUpload } from "../../util/fetcher";
import ProductHeader from "./productHeader";
import ProductMain from "./productMain";

const Product = () => {
  const token = getCookie("pic_token");

  const navigate = useNavigate();
  const nameRef = useRef();
  const priceRef = useRef();
  const linkRef = useRef();
  const imgRef = useRef();
  const [validPass, setValidPass] = useState(false);

  const imgUpload = async () => {
    return await profileUpload(imgRef.current.files).then((res) => {
      return res.data.filename;
    });
  };

  const handleUpload = () => {
    imgUpload().then((image) => {
      const body = {
        product: {
          itemName: nameRef.current.value,
          price: priceRef.current.value.replace(/,/g, "") * 1,
          link: linkRef.current.value,
          itemImage: image,
        },
      };
      addProduct(body, token) //
        .then(() => {
          alert("상품이 성공적으로 등록되었습니다.");
          navigate("/mypage");
        }) //
        .catch((err) => {
          alert(err);
        });
    });
  };

  const createProduct = () => {
    addProduct();
  };

  return (
    <>
      <ProductHeader
        navigate={navigate}
        validPass={validPass}
        handleUpload={handleUpload}
      />
      <ProductMain
        nameRef={nameRef}
        priceRef={priceRef}
        linkRef={linkRef}
        imgRef={imgRef}
        setValidPass={setValidPass}
      />
    </>
  );
};

export default Product;
