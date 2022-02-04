import React, { useRef, useState, useEffect } from "react";
import { checkEmail } from "../../util/fetcher";
import styles from "./membership.module.css";

const Membership = ({ setEmail, setPwd }) => {
  const emailRef = useRef();
  const pwdRef = useRef();

  const [emailValid, setEmailValid] = useState(null);
  const [pwdValid, setPwdValid] = useState(null);
  const [validPass, setValidPass] = useState(false);

  const checkEmailFormat = () => {
    const regExp =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/;
    return regExp.test(emailRef.current.value);
  };

  const handleEmailValid = () => {
    if (checkEmailFormat()) {
      checkEmail("/user/emailvalid", emailRef.current.value).then((res) => {
        setEmailValid(res);
      });
    } else {
      setEmailValid(null);
    }
  };

  const checkPwdFormat = () => (pwdRef.current.value.length > 5 ? true : false);

  const handlePwdValid = () => {
    if (checkPwdFormat()) setPwdValid(true);
    else setPwdValid(false);
  };

  const handleSubmitData = () => {
    setEmail(emailRef.current.value);
    setPwd(pwdRef.current.value);
  };

  useEffect(() => {
    if (emailValid && pwdValid) {
      setValidPass(true);
    } else {
      setValidPass(false);
    }
  }, [emailValid, pwdValid]);

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
            ref={emailRef}
            type="email"
            name="email"
            placeholder="이메일 주소를 입력해 주세요."
            onBlur={handleEmailValid}
          />
          <p id="email_err_msg" className={styles.err_msg}>
            {emailValid
              ? ""
              : emailValid === null
              ? ""
              : "*이미 가입된 이메일 주소 입니다."}
          </p>
        </div>
        <div className={styles.input_wrap}>
          <label className={styles.label} htmlFor="pwd">
            비밀번호
          </label>
          <input
            id="pwd"
            ref={pwdRef}
            className={styles.input}
            type="password"
            name="pwd"
            placeholder="비밀번호를 설정해 주세요."
            onInput={handlePwdValid}
          />
          <p id="pwd_err_msg" className={styles.err_msg}>
            {pwdValid == null
              ? ""
              : pwdValid
              ? ""
              : "*비밀번호는 6자 이상이어야 합니다."}
          </p>
        </div>
        {validPass ? (
          <button
            className={`${styles.btn_submit} ${styles.activate}`}
            onClick={handleSubmitData}
            type="button"
          >
            회원가입
          </button>
        ) : (
          <button className={styles.btn_submit} type="button" disabled>
            회원가입
          </button>
        )}
      </form>
    </main>
  );
};

export default Membership;
