import React from "react";
import { Route, Routes } from "react-router-dom";

const Chat = () => {
  return (
    <Routes>
      <Route path="/" element={<div>chat</div>} />
      <Route path="/chatroom" element={<div>chatroom</div>} />
    </Routes>
  );
};

export default Chat;
