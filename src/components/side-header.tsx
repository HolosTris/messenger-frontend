import { Button } from "./button";
import "./side-header.css";

interface SideHeaderProps {
  openProfile: () => void;
}

export const SideHeader = ({ openProfile }: SideHeaderProps) => {
  return (
    <div className="side-header">
      <Button className="profile-button" onClick={() => openProfile()}></Button>
      <div className="search-con">
        <input
          className="search"
          name="search"
          type="text"
          placeholder="Поиск"
        />
      </div>
      <Button className="new-chat-button"></Button>
    </div>
  );
};
