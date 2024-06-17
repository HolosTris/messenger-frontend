import { FC } from "react";
import "./message.css";
import "./user-message.css";

interface UserMessageProps {
  text: string;
  deliveryTime: number;
  isRead: boolean;
}

export const UserMessage: FC<UserMessageProps> = ({
  text,
  deliveryTime,
  isRead,
}) => {
  const time = new Date(deliveryTime);
  const hours = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
  const minutes =
    time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
  const timeString = hours + ":" + minutes;

  return (
    <div className="user-message-box message-box">
      <div className="user-message message semilight">
        <p>{text}</p>
        <span>
          {timeString}
          {isRead ? (
            <img
              src="/check_read.svg"
              alt="Message is read"
              height={30}
              width={30}
            />
          ) : (
            <img
              src="/check_unread.svg"
              alt="Message isn't read"
              height={30}
              width={30}
            />
          )}
        </span>
      </div>
    </div>
  );
};
