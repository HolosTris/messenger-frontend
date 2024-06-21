import "./message-item.css";
import { convertTimestampToTimeString } from "../utils";

interface MessageItemProps {
  text: string;
  date: number;
  from: { name: string; srcPic: string };
}

export const MessageItem = ({ text, date, from }: MessageItemProps) => {
  const timeString = convertTimestampToTimeString(date);

  return (
    <div className="message-box">
      <img
        className="profile-pic"
        src={from.srcPic}
        alt={from.name + "'s profile picture"}
        height={60}
        width={60}
      />
      <div className="message non-user-message semilight">
        <p className="username semibold">{from.name}</p>
        <p>{text}</p>
        <span>{timeString}</span>
      </div>
    </div>
  );
};
