import { User } from "../App";
import { ChatFooter } from "./chat-footer";
import { ChatHeader } from "./chat-header";
import "./chat-view.css";
import { MessageBox } from "./messages-box";

const user: User = {
  id: 1,
  username: "mikunak",
  name: "Гуго Де Пейн",
  bio: "Матрица даёт о себе знать",
  srcPic: "/image.png",
};

export const ChatView = () => {
  return (
    <main className="chat-view">
      <ChatHeader user={user} />
      <MessageBox user={user} />
      <ChatFooter />
    </main>
  );
};
