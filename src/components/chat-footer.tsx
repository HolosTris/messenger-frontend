import { useRef } from "react";
import { Button } from "./button";
import "./chat-footer.css";

export const ChatFooter = () => {
  const textareaRef = useRef(null);
  const spanRef = useRef(null);

  return (
    <div className="chat-footer">
      <Button className="emoji-button"></Button>
      <textarea
        className="new-message semilight"
        name="new-message"
        placeholder="Сообщение"
        style={{ height: spanRef.current?.style.height }}
        ref={textareaRef}
      />
      {/* <span ref={spanRef}>{textareaRef.current?.value}</span> */}
      {/* <div
        className="input new-message semilight"
        role="textbox"
        contentEditable
      /> */}
      <Button className="send-button" disabled={true}></Button>
    </div>
  );
};
