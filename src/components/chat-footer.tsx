import { Button } from "./button";
import "./chat-footer.css";

export const ChatFooter = () => {
  return (
    <div className="chat-footer">
      <Button className="emoji-button"></Button>
      <input
        className="new-message semilight"
        type="text"
        name="new-message"
        placeholder="Сообщение"
      />
      <Button className="send-button" disabled={true}></Button>
    </div>
  );
};
