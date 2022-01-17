import React from "react";

const Login = () => {
  return (
    <main className="main">
      <h1 className="title">로그인</h1>
      <form>
        <div className="input_wrap">
          <label htmlFor="email">이메일</label>
          <input id="email" type="email" name="eMail" />
          <p id="emailError" className="err_msg"></p>
        </div>

        <div className="input_wrap">
          <label htmlFor="pwd">비밀번호</label>
          <input id="pwd" type="password" name="pwd" />
        </div>

        <button id="submitBtn" className="btn_submit" type="button" disabled>
          로그인
        </button>
      </form>
      <a className="link_register" href="/templates/join_membership.html">
        이메일로 회원가입
      </a>
    </main>
  );
};

export default Login;
