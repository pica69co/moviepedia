import React from "react";
import { useSelector } from "react-redux";
import { userSelector } from "../../features/auth";

const Profile = () => {
  const { user, isAuthenticated } = useSelector(userSelector);
  console.log("profile: ", user);
  return <div style={{ background: "red" }}>Profile</div>;
};

export default Profile;
