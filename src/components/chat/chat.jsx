import React from "react";
import { Route, Routes } from "react-router-dom";
import ChatList from "./chatList/chatList";
import ChatRoom from "./chatRoom/chatRoom";

const Chat = () => {
  return (
    <Routes>
      <Route path="/" element={<ChatList />} />
      <Route path="/chatroom" element={<ChatRoom />} />
    </Routes>
  );
};

export default Chat;
