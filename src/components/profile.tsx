import { useContext } from "react";
import { User } from "../types";
import { Button } from "./button";
import "./profile.css";
import { AppStateContext } from "../App";
import { ProfileSettings } from "./profile-settings";

interface ProfileProps {
  user: User;
  closeProfile: () => void;
  logOut: () => void;
}

export const Profile = ({ user, closeProfile, logOut }: ProfileProps) => {
  return (
    <div className="profile semibold">
      <div className="img-con">
        <img src={user.srcPic} />
        <div className="img-shadow" />

        <Button className="back-btn" onClick={() => closeProfile()} />
        <Button className="more-btn" />

        <h1>{user.name}</h1>
      </div>

      <div className="profile-item">
        <span>Тэг</span>
        <p>{"@" + user.username}</p>
      </div>
      <div className="profile-item">
        <span>Дата рождения</span>
        <p>{user.birthdate?.toLocaleDateString() || "Не указано"}</p>
      </div>
      <div className="profile-item">
        <span>О себе</span>
        <p>{user.bio || "Не указано"}</p>
      </div>
      <ProfileSettings logOut={logOut} />
    </div>
  );
};
