import { Message, User } from "../types";
import { convertTimestampToTimeString } from "../utils";
import "./chat-item.css";

interface ChatItemProps {
  id: number;
  type: string;
  members: User[];
  messages: Message[];
  name: string;
  srcPic: string;
}

export const ChatItem = ({
  type,
  members,
  messages,
  name,
  srcPic,
}: ChatItemProps) => {
  const lastMessage = messages[messages.length - 1];
  const timeString = convertTimestampToTimeString(lastMessage.date);

  return (
    <div className="chat">
      <img
        className="chat-pic"
        src={type == "dialogue" ? members[1].srcPic : srcPic}
        alt={name + "'s chat picture"}
        height={80}
        width={80}
      />
      <span className="chat-name">
        {type == "dialogue" ? members[1].name : name}
      </span>
      <p className="semilight">{lastMessage.text}</p>
      <span className="time semilight">{timeString}</span>
      <img
        className="check"
        src={
          lastMessage.isRead ? "/check_chat_read.svg" : "/check_chat_unread.svg"
        }
        alt="Message is read"
        height={30}
        width={30}
      />
    </div>
  );
};
