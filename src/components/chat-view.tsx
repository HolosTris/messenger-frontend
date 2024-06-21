import { User } from "../types";
import { generateUser } from "../utils";
import { ChatFooter } from "./chat-footer";
import { ChatHeader } from "./chat-header";
import "./chat-view.css";
import { MessageBox } from "./messages-box";

const user: User = generateUser(1);

export const ChatView = () => {
  return (
    <main className="chat-view">
      <ChatHeader user={user} />
      <MessageBox user={user} />
      <ChatFooter />
    </main>
  );
};
