import { Button } from "./button";
import "./side-header.css";

export const SideHeader = () => {
  return (
    <div className="side-header">
      <Button className="profile-button"></Button>
      <div className="search-con">
        <input
          className="search"
          name="search"
          type="text"
          placeholder="Поиск"
        />
      </div>
      <Button className="new-chat-button" disabled={true}></Button>
    </div>
  );
};
