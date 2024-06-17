import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { UserMessage } from "./components/user-message";
import { Message } from "./components/message";

interface User {
  id: number;
  username: string;
  name: string;
  srcPic: string;
}

const user: User = {
  id: 1,
  username: "mikunak",
  name: "Гуго Де Пейн",
  srcPic: "/image.png",
};

const messages: {
  id: number;
  user: User;
  text: string;
  deliveryTime: number;
}[] = [];

for (let i = 0; i < 10; i++) {
  messages[i] = {
    id: i,
    user: user,
    text: "Это длинное сообщение, призванное показать сообщения в несколько строк.",
    deliveryTime: Date.now() + i * 10 * 60 * 1000,
  };
}

function App() {
  const [time, setTime] = useState(Date.now());

  setInterval(() => setTime(Date.now()), 10 * 1000);

  const [user, setUser] = useState({
    name: "Гуго Де Пейн",
    srcPic: "/image.png",
  });

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <>
      <aside className="chats-view flex min-h-screen flex-col items-center justify-between p-24 text-2xl"></aside>
      <main className="chat-view">
        <div className="messages-box">
          {messages.map((message) => (
            <Message key={message.id} {...message} />
          ))}
          <UserMessage
            text="Hello, World"
            deliveryTime={time}
            isRead={true}
          ></UserMessage>
          <div ref={messagesEndRef} />
        </div>
      </main>
    </>
  );
}

export default App;
