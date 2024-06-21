import { User } from "../types";
import { Button } from "./button";
import "./chat-header.css";

interface ChatHeaderProps {
  user: User;
}

export const ChatHeader = ({ user }: ChatHeaderProps) => {
  return (
    <div className="chat-header">
      <Button className="back-button"></Button>
      <div className="profile-info">
        <img src={user.srcPic} height={80} width={80} />
        <span className="name">{user.name}</span>
        <span className="bio semilight">{user.bio}</span>
      </div>
      <Button className="more-button"></Button>
    </div>
  );
};
