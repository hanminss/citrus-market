import React from "react";
import Menu from "../../modules/menu/menu";
import ChatListHeader from "./chatListHeader";
import styles from "./chatList.module.css";
import ChatObj from "./chatObj";
import { CHATEX } from "../../../constants";

const ChatList = () => {
  const data = CHATEX;
  return (
    <>
      <ChatListHeader />
      <Menu />
      <main className={styles.main}>
        {data.map((chatData, idx) => {
          return <ChatObj key={`chat-${idx}`} data={chatData} />;
        })}
      </main>
    </>
  );
};

export default ChatList;
