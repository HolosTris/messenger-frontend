import { createContext, useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { ChatView } from "./components/chat-view";
import { SideView } from "./components/side-view";
import { Auth, Chat, User } from "./types";
import { generateUser } from "./utils";

const me: User = generateUser(0);

const defaultAuth: Auth = { date: Date.now(), user: me };
const noneChat: Chat = {
  id: 0,
  type: "none",
  members: [],
  messages: [],
  name: "none",
  srcPic: "none",
};

export const AuthContext = createContext<Auth>(defaultAuth);
export const ChatContext = createContext<Chat>(noneChat);

function App() {
  const [auth, setAuth] = useState<Auth>(defaultAuth);
  const [chat, setChat] = useState<Chat>(noneChat);

  return (
    <AuthContext.Provider value={auth}>
      <ChatContext.Provider value={chat}>
        <SideView />
        <ChatView />
      </ChatContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
