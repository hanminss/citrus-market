import React, { useEffect, useState } from "react";
import Membership from "./membership";
import Profile from "./profile";

const Join = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [userName, setUserName] = useState("");
  const [accountName, setAccountName] = useState("");
  const [intro, setIntro] = useState("");
  const [imgUrl, setImgUrl] = useState("1641803765586.png");

  useEffect(() => {
    if (email && pwd && userName && accountName && intro) {
      console.log(email, pwd, userName, accountName, intro, imgUrl);
    }
  }, [email, pwd, userName, accountName, intro, imgUrl]);

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
