import { useState } from "react";
import { ChatItem } from "./chat-item";
import "./chats-box.css";
import { Chat } from "../types";
import { generateChat } from "../utils";

export const ChatsBox = () => {
  const [chats, setChats] = useState<Chat[]>([generateChat()]);

  return (
    <div className="chats-box">
      {chats.map((chat) => (
        <ChatItem key={chat.id} {...chat} />
      ))}
    </div>
  );
};
