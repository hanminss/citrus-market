import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { join } from "../../util/fetcher";
import Membership from "./membership";
import Profile from "./profile";

const Join = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [userName, setUserName] = useState("");
  const [accountName, setAccountName] = useState("");
  const [intro, setIntro] = useState("");
  const [imgUrl, setImgUrl] = useState("1642573050179.png");

  useEffect(() => {
    if (email && pwd && userName && accountName && intro) {
      const body = {
        user: {
          email,
          password: pwd,
          username: userName,
          accountname: accountName,
          intro,
          image: imgUrl,
        },
      };
      join(body).then((res) => {
        if (res.data.message === "회원가입 성공") {
          navigate("/login");
        } else {
          alert(`err: ${res.data.message}`);
        }
      });
    }
  }, [email, pwd, userName, accountName, intro, imgUrl, navigate]);

  if (email && pwd) {
    return (
      <Profile
        setUserName={setUserName}
        setAccountName={setAccountName}
        setIntro={setIntro}
        setImgUrl={setImgUrl}
      />
    );
  } else {
    return <Membership setEmail={setEmail} setPwd={setPwd} />;
  }
};

export default Join;
