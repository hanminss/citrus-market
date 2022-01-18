import React from "react";
import Menu from "../../modules/menu/menu";
import styles from "./chatList.module.css";
import ChatObj from "./chatObj";
import { CHATEX } from "../../../constants";
import ThreeDotHeader from "../../modules/header/threeDotHeader";

const ChatList = () => {
  const data = CHATEX;
  return (
    <>
      <ThreeDotHeader />
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
