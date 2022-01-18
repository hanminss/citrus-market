import React from "react";
import ChatRoomHeader from "./chatRoomHeader";
import InputBar from "./inputBar";
import styles from "./chatRoom.module.css";
import OtherChat from "./otherChat";

const ChatRoom = () => {
  return (
    <>
      <ChatRoomHeader />
      <InputBar />
      <main className={styles.main}>
        <OtherChat />
      </main>
    </>
  );
};

export default ChatRoom;
