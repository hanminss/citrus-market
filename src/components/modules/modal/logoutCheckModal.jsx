import React from "react";
import { useNavigate } from "react-router-dom";
import { removeCookie } from "../../../util/cookie";
import styles from "./logoutCheckModal.module.css";

const LogoutCheckModal = ({ setCheckModal }) => {
  const logout = () => {
    removeCookie("pic_token");
    removeCookie("pic_accountname");
    removeCookie("pic_profile");
    window.location.replace("/");
  };
  return (
    <section className={styles.outer}>
      <div className={styles.checkModal}>
        <p className={styles.modal_msg}>로그아웃하시겠어요?</p>
        <div>
          <button onClick={() => setCheckModal(false)}>취소</button>
          <button onClick={logout}>로그아웃</button>
        </div>
      </div>
    </section>
  );
};

export default LogoutCheckModal;
