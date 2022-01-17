import React, { useEffect, useRef, useState } from "react";
import styles from "./login.module.css";

const Login = () => {
  const emailRef = useRef();
  const pwdRef = useRef();

  // check flag
  const [emailFormat, setEmailFormat] = useState(null);
  const [emailSpace, setEmailSpace] = useState(null);
  const [pwdSpace, setPwdSpace] = useState(null);
  const [passValid, setPassValid] = useState(false);

  const [errMsg, setErrMsg] = useState("");

  const checkEmailFormat = () => {
    const regExp =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/;
    return regExp.test(emailRef.current.value);
  };

  const handleEmaliValid = () => {
    if (!!emailRef.current.value) {
      setEmailSpace(true);
      if (checkEmailFormat()) {
        setEmailFormat(true);
      } else {
        setEmailFormat(false);
      }
    } else {
      setEmailSpace(false);
    }
  };

  const handlePwdValid = () => {
    if (!!pwdRef.current.value) setPwdSpace(true);
    else setPwdSpace(false);
  };

  useEffect(() => {
    if (emailFormat && emailSpace && pwdSpace) setPassValid(true);
    else setPassValid(false);
  }, [emailFormat, emailSpace, pwdSpace]);

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>로그인</h1>
      <form>
        <div className={styles.input_wrap}>
          <label className={styles.label} htmlFor="email">
            이메일
          </label>
          <input
            ref={emailRef}
            className={styles.input}
            id="email"
            type="email"
            onBlur={handleEmaliValid}
          />
          <p className={styles.err_msg}>{errMsg}</p>
        </div>

        <div className={styles.input_wrap}>
          <label className={styles.label} htmlFor="pwd">
            비밀번호
          </label>
          <input
            ref={pwdRef}
            className={styles.input}
            id="pwd"
            type="password"
            onBlur={handlePwdValid}
          />
        </div>
        {passValid ? (
          <button
            id="submitBtn"
            className={`${styles.btn_submit} ${styles.activate}`}
            type="button"
          >
            로그인
          </button>
        ) : (
          <button
            id="submitBtn"
            className={styles.btn_submit}
            type="button"
            disabled
          >
            로그인
          </button>
        )}
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
