import { useContext } from "react";
import { User } from "../types";
import { Button } from "./button";
import "./chat-header.css";
import { AppStateContext } from "../App";

interface ChatHeaderProps {
  user: User;
}

export const ChatHeader = ({ user }: ChatHeaderProps) => {
  const { appState, setAppState } = useContext(AppStateContext);

  return (
    <div className="chat-header">
      <Button
        className="back-btn"
        onClick={() => setAppState({ ...appState, curChatId: 0 })}
      ></Button>
      <div
        className="profile-info"
        onClick={() => setAppState({ ...appState, profileUser: user })}
      >
        <img src={user.srcPic} height={80} width={80} />
        <span className="name">{user.name}</span>
        <span className="bio semilight">{user.bio}</span>
      </div>
      <Button className="more-btn"></Button>
    </div>
  );
};
