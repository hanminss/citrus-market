import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoutModal from "../modal/logoutModal";
import styles from "./threeDotHeader.module.css";

const ThreeDotHeader = () => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  return (
    <header className={styles.header}>
      <button className={styles.btn} onClick={() => navigate(-1)}>
        <img
          className={styles.header_img}
          src="/images/chat/icon-arrow-left.png"
          alt="뒤로가기"
        />
      </button>

      <button className={styles.btn}>
        <img
          className={styles.header_img}
          src="/images/chat/more-vertical.png"
          alt="더보기"
          onClick={() => setModal(true)}
        />
      </button>
      {modal ? <LogoutModal setModal={setModal} /> : ""}
    </header>
  );
};

export default ThreeDotHeader;
