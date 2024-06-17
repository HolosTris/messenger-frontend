import { FC } from "react";
import "./user-message.css";

interface MessageProps {
  text: string;
  deliveryTime: number;
  user: { name: string; srcPic: string };
}

export const Message = ({ text, deliveryTime, user }: MessageProps) => {
  const time = new Date(deliveryTime);
  const hours = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
  const minutes =
    time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
  const timeString = hours + ":" + minutes;

  return (
    <div className="message-box">
      <img
        className="profile-pic"
        src={user.srcPic}
        alt={user.name + "'s profile picture"}
        height={60}
        width={60}
      />
      <div className="message non-user-message semilight">
        <p className="username semibold">{user.name}</p>
        <p>{text}</p>
        <span>{timeString}</span>
      </div>
    </div>
  );
};
