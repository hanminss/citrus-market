import React from "react";
import styles from "./login.module.css";

const Login = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>로그인</h1>
      <form>
        <div className={styles.input_wrap}>
          <label className={styles.label} htmlFor="email">
            이메일
          </label>
          <input className={styles.input} id="email" type="email" />
          <p className={styles.err_msg}></p>
        </div>

        <div className={styles.input_wrap}>
          <label className={styles.label} htmlFor="pwd">
            비밀번호
          </label>
          <input className={styles.input} id="pwd" type="password" />
        </div>

        <button
          id="submitBtn"
          className={styles.btn_submit}
          type="button"
          disabled
        >
          로그인
        </button>
      </form>
      <a
        className={styles.link_register}
        href="/templates/join_membership.html"
      >
        이메일로 회원가입
      </a>
    </main>
  );
};

export default Login;
