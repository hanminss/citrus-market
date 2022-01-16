import React from "react";
import { Link } from "react-router-dom";
import styles from "./notLogin.module.css";

const NotLogin = () => {
  return (
    <div className={styles.bg}>
      <section className={styles.logo_wrap}>
        <img
          className={styles.img_logo}
          src="/images/notLogin/symbol-logo-W.png"
          alt="로고 이미지"
        />
      </section>
      <section className={styles.login_wrap}>
        <div className={styles.btn_wrap}>
          <button className={`${styles.btn_login} ${styles.btn_login_kakao}`}>
            카카오톡 계정으로 로그인
          </button>
          <button className={`${styles.btn_login} ${styles.btn_login_google}`}>
            구글 계정으로 로그인
          </button>
          <button
            className={`${styles.btn_login} ${styles.btn_login_facebook}`}
          >
            페이스북 계정으로 로그인
          </button>
        </div>
        <div className={styles.link_wrap}>
          <Link className={styles.link_email} to="/login">
            이메일로 로그인
          </Link>
          <Link to="/join">회원가입</Link>
        </div>
      </section>
    </div>
  );
};

export default NotLogin;
