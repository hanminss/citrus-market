import React from "react";
import { useParams } from "react-router-dom";

const OtherPage = () => {
  const { userID } = useParams();
  return (
    <div>
      <p>{userID}</p>
    </div>
  );
};

export default OtherPage;
