import { UserMessageItem } from "./user-message-item";
import { MessageItem } from "./message-item";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../App";
import "./messages-box.css";
import { Message, User } from "../types";
import { generateMessages } from "../utils";

interface MessageBoxProps {
  messages: Message[];
}

export const MessageBox = ({ messages }: MessageBoxProps) => {
  const auth = useContext(AuthContext);

  // const [messages, setMessages] = useState<Message[]>(
  //   generateMessages(user, auth.user)
  // );

  setInterval(() => {
    // setMessages([
    //   ...messages,
    //   {
    //     user: auth.user,
    //     text: "Hello, World",
    //     deliveryTime: time,
    //     isRead: true,
    //   },
    // ]);
  }, 3 * 1000); // for test purposes

  const messagesEndRef = useRef(null);

  const scrollToBottom = (doSmoothly: boolean = true) => {
    messagesEndRef.current?.scrollIntoView({
      behavior: doSmoothly ? "smooth" : "instant",
    });
  };

  useEffect(() => {
    scrollToBottom(false);
    console.log("instant boy");
  }, [messages]);

  // useEffect(() => {
  //   scrollToBottom();
  //   console.log("smooth boy");
  // }, [messages]);

  return (
    <div className="messages-box">
      {messages.map((message) =>
        message.from.id == auth.user.id ? (
          <UserMessageItem key={message.id} {...message} />
        ) : (
          <MessageItem key={message.id} {...message} />
        )
      )}
      <div ref={messagesEndRef} />
    </div>
  );
};
