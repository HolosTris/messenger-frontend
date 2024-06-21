import { ChatsBox } from "./chats-box";
import { SideHeader } from "./side-header";
import "./side-view.css";

export const SideView = () => {
  return (
    <aside className="side-view flex min-h-screen flex-col items-center justify-between p-24 text-2xl">
      <SideHeader />
      <ChatsBox />
    </aside>
  );
};
