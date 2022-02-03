import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./notFound.module.css";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <main>
      <section className={styles.contentWrap}>
        <img src="/images/404/icon-404.png" alt="" />
        <p className={styles.desc}>페이지를 찾을 수 없습니다.</p>
        <button className={styles.backBtn} onClick={() => navigate(-1)}>
          이전 페이지
        </button>
      </section>
    </main>
  );
};

export default NotFound;
