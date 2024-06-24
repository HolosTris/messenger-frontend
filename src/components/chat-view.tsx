import { Outlet } from "react-router-dom";
import { Message, User } from "../types";
import { generateUser, getChatById } from "../utils";
import { ChatFooter } from "./chat-footer";
import { ChatHeader } from "./chat-header";
import "./chat-view.css";
import { MessageBox } from "./messages-box";
import { NullChat } from "./null-chat";
import { useContext } from "react";
import { AppStateContext, AuthContext, ChatsContext } from "../App";

//const user: User = generateUser(1);

export const ChatView = () => {
  const { user } = useContext(AuthContext);
  const { appState } = useContext(AppStateContext);
  const { chats, setChats } = useContext(ChatsContext);

  const chat = getChatById(chats, appState.curChatId);
  console.log(chat?.id || "no chat");

  const sendMessage = (text: string) => {
    const messages = chat.messages;
    const message = {
      id: messages.length,
      from: user,
      text: text,
      date: Date.now(),
      isRead: false,
    };
    chat.messages = [...messages, message];

    console.log(messages);

    // setChats([...chats, { ...chat, messages: [...messages, message] }]);
    setChats([...chats]);
  };

  return (
    <main className="chat-view">
      {chat ? (
        <>
          <ChatHeader user={chat.members[1]} />
          <MessageBox messages={chat.messages} />
          <ChatFooter sendMessage={sendMessage} />
        </>
      ) : (
        <NullChat />
      )}
    </main>
  );
};
