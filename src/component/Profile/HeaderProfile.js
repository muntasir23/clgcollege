import React, { useEffect, useState } from "react";
import { IoIosNotifications, IoMdImages } from "react-icons/io";
import { MdAttachEmail } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { useAuth } from "../../context/AuthContext";
import useBlog from '../../useContext//useBlog.js';
import useNotice from "../../useContext/useNotice";
import "./Profile.css";
import axios from "axios";

export default function HeaderProfile() {
  const { currentUser } = useAuth();

  const {article} = useBlog();
  const {notice} = useNotice();

  const [students, setStudents] = useState([])

  useEffect(() =>{
    axios.get("https://studentsbackend-v1du.onrender.com/api/students")
    .then(res => {
      setStudents(res.data)
      console.log(res.data);
    })
  },[])

  return (
    <div className="header-profile">
      <div className="name-holder">
        <div className="name-holder">
          <h1>
            Hey <span>{currentUser.displayName} !</span>
          </h1>
          <p>
            <MdAttachEmail />
            {currentUser.email}
          </p>
        </div>
      </div>

      <div className="boxes">
        <h3>
          Total Notice <br /> Available {notice.length}
        </h3>

        <div className="rounded-boxes">
          <IoIosNotifications />
        </div>
      </div>
      <div className="boxes">
        <h3>
          Total Events <br /> Image {article.length}
        </h3>

        <div className="rounded-boxes">
          <IoMdImages />
        </div>
      </div>
      <div className="boxes">
        <h3>
          Total Student <br /> Available{students.length}
        </h3>

        <p className="rounded-boxes">
          <PiStudentFill />
        </p>
      </div>
    </div>
  );
}
