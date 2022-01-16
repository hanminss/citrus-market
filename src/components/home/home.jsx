import React, { useEffect, useState } from "react";
import Splash from "../splash/splash";

const Home = () => {
  const [isLogined] = useState(false);
  const [splash, setSplash] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setSplash("true");
    }, 3000);
  }, []);

  if (!splash) return <Splash />;
  if (isLogined) return <div>feed</div>;
  else return <div>login</div>;
};

export default Home;
