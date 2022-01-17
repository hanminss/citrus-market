import React, { useEffect, useRef, useState } from "react";
import { login } from "../../util/fetcher";
import styles from "./login.module.css";
import { setCookie } from "../../util/cookie";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ setIsLogin }) => {
  const emailRef = useRef();
  const pwdRef = useRef();
  const navigate = useNavigate();

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
    if (emailRef.current.value) {
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
    if (pwdRef.current.value) setPwdSpace(true);
    else setPwdSpace(false);
  };

  const handleSubmitData = () => {
    const body = {
      user: {
        email: emailRef.current.value,
        password: pwdRef.current.value,
      },
    };
    login(body).then((res) => {
      if (res.message) {
        setErrMsg(res.message);
      } else {
        setCookie("pic_token", res.user.token);
        setCookie("pic_accountname", res.user.accountname);
        setIsLogin(true);
        navigate("/");
      }
    });
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
          <p className={styles.err_msg}></p>
        </div>
        {passValid ? (
          <button
            id="submitBtn"
            className={`${styles.btn_submit} ${styles.activate}`}
            type="button"
            onClick={handleSubmitData}
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
      <Link className={styles.link_register} to="/join">
        이메일로 회원가입
      </Link>
    </main>
  );
};

export default Login;
