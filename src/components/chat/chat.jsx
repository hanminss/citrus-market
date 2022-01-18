import React from "react";
import { Route, Routes } from "react-router-dom";
import ChatList from "./chatList/chatList";

const Chat = () => {
  return (
    <Routes>
      <Route path="/" element={<ChatList />} />
      <Route path="/chatroom" element={<div>chatroom</div>} />
    </Routes>
  );
};

export default Chat;
