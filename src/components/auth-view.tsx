import "./auth-view.css";

interface AuthViewProps {
  className: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const AuthView = () => {
  return (
    <div className="auth-view">
      <div className="auth-con">
        <h1 className="semibold">Just Messenger</h1>
        <span className="semilight">
          Выберите существующий чат или начните новый
        </span>
      </div>
    </div>
  );
};
