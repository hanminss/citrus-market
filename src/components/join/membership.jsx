import React from "react";
import styles from "./membership.module.css";

const Membership = () => {
  const onBlur = () => {
    console.log("x");
  };

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>이메일로 회원가입</h1>
      <form>
        <div className={styles.input_wrap}>
          <label className={styles.label} htmlFor="email">
            이메일
          </label>
          <input
            id="email"
            className={styles.input}
            type="email"
            name="email"
            placeholder="이메일 주소를 입력해 주세요."
            onBlur={onBlur}
          />
          <p id="email_err_msg" className={styles.err_msg}></p>
        </div>
        <div className={styles.input_wrap}>
          <label className={styles.label} htmlFor="pwd">
            비밀번호
          </label>
          <input
            id="pwd"
            className={styles.input}
            type="password"
            name="pwd"
            placeholder="비밀번호를 설정해 주세요."
          />
          <p id="pwd_err_msg" className={styles.err_msg}></p>
        </div>
        <button className={styles.btn_submit} type="button" disabled>
          회원가입
        </button>
      </form>
    </main>
  );
};

export default Membership;
