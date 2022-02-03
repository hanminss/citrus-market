import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import { getCookie } from "../../util/cookie";
import { getMyInfo, getProducts } from "../../util/fetcher";
import ThreeDotHeader from "../modules/header/threeDotHeader";
import Menu from "../modules/menu/menu";
import ProductContainer from "../mypage/productContainer";
import OtherPageInfo from "./otherPageInfo";
import styles from "./otherPage.module.css";
import PostSection from "../mypage/postSection";
import PostModal from "../modules/modal/postModal";

const OtherPage = () => {
  const { accountname } = useParams();
  const token = getCookie("pic_token");
  const myAcoountName = getCookie("pic_accountname");
  const [userInfo, setUserInfo] = useState(false);
  const [products, setProducts] = useState(false);
  const [modal, setModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getMyInfo(accountname, token) //
      .then((res) => {
        if (res.data.profile.accountname === myAcoountName) {
          navigate("/mypage");
        }
        setUserInfo(res.data.profile);
      })
      .catch((err) => alert(err));
    getProducts(accountname, token) //
      .then((res) => setProducts(res.data.product))
      .catch((err) => alert(err));
  }, []);

  const handleModal = (id) => {
    if (modal) {
      setModal(false);
      document.body.style.overflow = "unset";
    } else {
      setModal(true);
      document.body.style.overflow = "hidden";
    }
    setSelectedPost(id);
  };

  if (!userInfo || !products) return <div>Loading...</div>;

  return (
    <>
      <ThreeDotHeader />
      <Menu />
      <main className={styles.mypage_main}>
        <OtherPageInfo
          userInfo={userInfo}
          accountname={accountname}
          token={token}
        />
        {products ? <ProductContainer products={products} /> : <></>}
        <PostSection
          accountname={userInfo.accountname}
          token={token}
          handleModal={handleModal}
          selectedPost={selectedPost}
        />
      </main>
      {modal ? (
        <PostModal
          handleModal={handleModal}
          postDelete={console.log("구현중 ..")}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default OtherPage;
