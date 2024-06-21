import { FC } from "react";
import "./message-item.css";
import "./user-message-item.css";
import { convertTimestampToTimeString } from "../utils";

interface UserMessageItemProps {
  text: string;
  date: number;
  isRead: boolean;
}

export const UserMessageItem: FC<UserMessageItemProps> = ({
  text,
  date,
  isRead,
}) => {
  const timeString = convertTimestampToTimeString(date);

  return (
    <div className="user-message-box message-box">
      <div className="user-message message semilight">
        <p>{text}</p>
        <span>
          {timeString}
          <img
            src={isRead ? "/check_read.svg" : "/check_unread.svg"}
            alt="Message is read"
            height={30}
            width={30}
          />
        </span>
      </div>
    </div>
  );
};
