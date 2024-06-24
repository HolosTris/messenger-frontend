import "./null-chat.css";
import logo from "/messenger.svg";

export const NullChat = () => {
  return (
    <div className="null-chat">
      <div>
        <img src={logo} alt="Just Messenger's logo" height={100} width={100} />
        <span className="semibold">Just Messenger</span>
      </div>
      <span className="semilight">
        Выберите существующий чат или начните новый
      </span>
    </div>
  );
};
