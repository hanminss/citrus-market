import React from "react";
import ChatRoomHeader from "./chatRoomHeader";
import InputBar from "./inputBar";
import styles from "./chatRoom.module.css";
import OtherChat from "./otherChat";
import MyChat from "./myChat";
import { CHAT_CONTENT } from "../../../constants";

const ChatRoom = () => {
  const data = CHAT_CONTENT;
  return (
    <>
      <ChatRoomHeader />
      <InputBar />
      <main className={styles.main}>
        {data.map((item, index) => {
          if (item.type) return <OtherChat key={`key-${index}`} data={item} />;
          else return <MyChat key={`key-${index}`} data={item} />;
        })}
      </main>
    </>
  );
};

export default ChatRoom;
