import { createContext, useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { MessageBox } from "./components/messages-box";
import { ChatView } from "./components/chat-view";

export interface User {
  id: number;
  username: string;
  name: string;
  bio: string;
  srcPic: string;
}

interface Auth {
  date: number;
  user: User;
}

const me: User = {
  id: 0,
  username: "Holos_Tris",
  name: "Трисей Александрин",
  bio: "I am that I am. And something else just to check.",
  srcPic: "/image.png",
}; //temporarly

const defaultAuth: Auth = { date: Date.now(), user: me };

export const AuthContext = createContext<Auth>(defaultAuth);

function App() {
  const [auth, setAuth] = useState<Auth>(defaultAuth);

  return (
    <AuthContext.Provider value={auth}>
      <aside className="chats-view flex min-h-screen flex-col items-center justify-between p-24 text-2xl"></aside>
      <ChatView />
    </AuthContext.Provider>
  );
}

export default App;
