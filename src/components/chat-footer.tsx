import { useEffect, useRef, useState } from "react";
import { Button } from "./button";
import "./chat-footer.css";
import { Message } from "../types";

interface ChatFooterProps {
  sendMessage: (message: string) => {};
}

export const ChatFooter = ({ sendMessage }: ChatFooterProps) => {
  const textareaRef = useRef(null);
  const spanRef = useRef(null);

  const [text, setText] = useState("");
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);

  useEffect(
    () =>
      text.trim().length != 0
        ? setIsBtnDisabled(false)
        : setIsBtnDisabled(true),
    [text]
  );

  const createMessage = () => {
    sendMessage(text);
    setText("");
  };

  return (
    <div className="chat-footer">
      <Button className="emoji-button"></Button>
      <textarea
        className="new-message semilight"
        name="new-message"
        placeholder="Сообщение"
        value={text}
        onInput={(ev) => setText(ev.currentTarget.value)}
        onKeyDown={(ev) => {
          if (ev.key === "Enter") {
            createMessage();
            ev.preventDefault();
          }
        }}
        // style={{ height: spanRef.current?.style.height }}
        ref={textareaRef}
      />
      {/* <span ref={spanRef}>{textareaRef.current?.value}</span> */}
      {/* <div
        className="input new-message semilight"
        role="textbox"
        contentEditable
      /> */}
      <Button
        className="send-button"
        disabled={isBtnDisabled}
        onClick={createMessage}
      ></Button>
    </div>
  );
};
