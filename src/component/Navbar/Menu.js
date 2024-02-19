import React, { useState } from "react";
import { FaRegImages } from "react-icons/fa6";
import { IoIosNotificationsOutline, IoMdMenu } from "react-icons/io";
import { IoLibraryOutline } from "react-icons/io5";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { PiStudent } from "react-icons/pi";
import { RiHome5Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

export default function Menu() {
  const [menu, setMenu] = useState(true);

  const handleMenuOpen = () => {
    setMenu(!menu);
  };

  return (
    <div className="menu-div">
      <p onClick={handleMenuOpen}>{menu ? <IoMdMenu /> : <RxCross2 />}</p>

      {menu ? (
        <></>
      ) : (
        <>
          <div className="nav-menu-holder">
            <ul>
              <li>
                {" "}
                <Link to="/" onClick={handleMenuOpen}>
                  <RiHome5Line />
                  Home
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/faculty" onClick={handleMenuOpen}>
                <LiaChalkboardTeacherSolid />
                  Faculties
                </Link>
              </li>

              <li>
                <details>
                  <summary>Seminar-Sections</summary>
                  <div>
                  <Link to='/library' >
                  <IoLibraryOutline />
                    Library
                  </Link>
                  </div>
                  <div>
                  <Link to='/students' >
                  <PiStudent />
                    Students
                  </Link>
                  </div>
                  <div>
                  </div>
                </details>
              </li>
              <li>
                {" "}
                <Link to="/notice" onClick={handleMenuOpen}>
                  <IoIosNotificationsOutline />
                  Notice
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/gallery" onClick={handleMenuOpen}>
                  <FaRegImages />
                  Gallery
                </Link>
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
}
