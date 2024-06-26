import { useContext } from "react";
import { ChatsBox } from "./chats-box";
import { Profile } from "./profile";
import { SideHeader } from "./side-header";
import "./side-view.css";
import { AppStateContext, AuthContext } from "../App";

export const SideView = () => {
  const { auth, setAuth } = useContext(AuthContext);
  const me = auth.user;

  const { appState, setAppState } = useContext(AppStateContext);
  const user = appState.profileUser;

  const openProfile = () => setAppState({ ...appState, profileUser: me });

  const closeProfile = () =>
    setAppState({ ...appState, profileUser: undefined });

  const logOut = () => {
    setAuth({ user: undefined, date: Date.now() });
  };

  return (
    <aside className="side-view flex min-h-screen flex-col items-center justify-between p-24 text-2xl">
      {!user ? (
        <>
          <SideHeader openProfile={openProfile} />
          <ChatsBox />
        </>
      ) : (
        <Profile user={user} closeProfile={closeProfile} logOut={logOut} />
      )}
    </aside>
  );
};
