import React, { useState } from "react";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { TbLogin2 } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import ToggleProfile from "./ToggleProfile";

export default function Account(props) {
  const { currentUser } = useAuth();
  const [toggleProfile, setToggleProfile] = useState(true);
  
  const handleToggleProfile = () =>{
    setToggleProfile(!toggleProfile)
  }

  return (
    <div>
      {currentUser ? (
        <>
          <div className="profile-nav" onClick={handleToggleProfile}>
            <RiAccountPinCircleLine />
            {currentUser.displayName}
          </div>
          {toggleProfile ? <></> : <ToggleProfile change={handleToggleProfile} />}
        </>
      ) : (
        <div>
          <Link to="/login" className="profile-nav"> <TbLogin2 /> LOG-IN</Link>
        </div>
      )}
    </div>
  );
}
