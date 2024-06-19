import { UserMessage } from "./user-message";
import { Message } from "./message";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext, User } from "../App";
import "./messages-box.css";

interface MessageBoxProps {
  user: User;
}

interface Message {
  id?: number;
  user: User;
  text: string;
  deliveryTime: number;
  isRead: boolean;
}

export const MessageBox = ({ user }: MessageBoxProps) => {
  const auth = useContext(AuthContext);

  const [messages, setMessages] = useState<Message[]>([]);

  for (let i = 0; i < 10; i++) {
    messages[i] = {
      id: i,
      user: user,
      text: "Это длинное сообщение, призванное показать сообщения в несколько строк.",
      deliveryTime: Date.now() + i * 10 * 60 * 1000,
      isRead: true,
    };
  } // for test purposes

  messages.push({
    user: auth.user,
    text: "Hello, World",
    deliveryTime: Date.now(),
    isRead: true,
  });

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
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="messages-box">
      {messages.map((message) =>
        message.user.id == auth.user.id ? (
          <UserMessage key={message.id} {...message} />
        ) : (
          <Message key={message.id} {...message} />
        )
      )}
      <div ref={messagesEndRef} />
    </div>
  );
};
