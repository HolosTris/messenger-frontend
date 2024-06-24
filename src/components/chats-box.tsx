import { useContext, useState } from "react";
import { ChatItem } from "./chat-item";
import "./chats-box.css";
import { Chat } from "../types";
import { generateChats } from "../utils";
import { ChatsContext } from "../App";

export const ChatsBox = () => {
  const { chats } = useContext(ChatsContext);

  return (
    <div className="chats-box">
      {chats.map((chat: Chat) => (
        <ChatItem key={chat.id} {...chat} />
      ))}
    </div>
  );
};
