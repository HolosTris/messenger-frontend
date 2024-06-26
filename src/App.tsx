import { createContext, useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { ChatView } from "./components/chat-view";
import { SideView } from "./components/side-view";
import { AppState, Auth, Chat, User } from "./types";
import { generateChats, generateUser } from "./utils";
import { Outlet } from "react-router-dom";
import { AuthView } from "./components/auth-view";

const me: User = generateUser(1);

const defaultAuth: Auth = { date: Date.now(), user: me };
const noneChats: Chat[] = [];
const defaultAppState: AppState = { curChatId: 0 };

export const AuthContext = createContext({
  auth: defaultAuth,
  setAuth: (auth: Auth) => {},
});

export const ChatsContext = createContext({
  chats: noneChats,
  setChats: (chats: Chat[]) => {},
});

export const AppStateContext = createContext({
  appState: defaultAppState,
  setAppState: (appState: AppState) => {},
});

function App() {
  const [auth, setAuth] = useState<Auth>(defaultAuth);
  const [chats, setChats] = useState<Chat[]>(generateChats(9));
  const [appState, setAppState] = useState<AppState>(defaultAppState);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      <ChatsContext.Provider value={{ chats, setChats }}>
        <AppStateContext.Provider value={{ appState, setAppState }}>
          {auth.user ? (
            <>
              <SideView />
              <ChatView />
            </>
          ) : (
            <AuthView />
          )}

          {/* <Outlet /> */}
        </AppStateContext.Provider>
      </ChatsContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
