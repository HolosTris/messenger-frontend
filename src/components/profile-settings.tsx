import "./profile-settings.css";
import { AppStateContext } from "../App";

interface ProfileSettingsProps {
  // user: User;
  // closeProfile: () => void;
  logOut: () => void;
}

export const ProfileSettings = ({ logOut }: ProfileSettingsProps) => {
  return (
    <div className="profile-settings">
      <div className="notifications">
        <span>Уведомления</span>
        <input
          className="toggle"
          type="checkbox"
          name="notifications"
          id="notifications"
        />
        <label htmlFor="notifications" />
      </div>
      <div className="only-friends">
        <span>Могут писать лишь друзья</span>
        <input
          className="toggle"
          type="checkbox"
          name="only-friends"
          id="only-friends"
        />
        <label htmlFor="only-friends" />
      </div>
      <div className="log-out clickable-div" onClick={logOut}>
        <span>Выход</span>
      </div>
    </div>
  );
};
