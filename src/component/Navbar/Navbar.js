import React from "react";
import { Link } from "react-router-dom";
import logo from "../../data/new_logo.svg";
import Menu from "./Menu";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbarholder">
      <Link to="/">
        <h1>
          <img alt="logo" src={logo} />
          <p>Ctg-Clg-Math</p>
        </h1>
      </Link>

      <div className="middle-name-nav">
      </div>

      <div className="account-menu">
        <Menu />
      </div>
    </div>
  );
}
