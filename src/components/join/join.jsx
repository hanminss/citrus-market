import React, { useState } from "react";
import Membership from "./membership";

const Join = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  if (email && pwd) {
    return <div>done.</div>;
  } else {
    return <Membership setEmail={setEmail} setPwd={setPwd} />;
  }
};

export default Join;
