import React from "react";

import hasansir from '../../data/IMG_20230225_100520_643.jpg';
import { LuFacebook } from "react-icons/lu";

export default function HeadTeacher() {
  return (
    <>
      <div className="headsir">
        <div className="headsir-image">
          <img alt="" src={hasansir} />
        </div>
        <div className="headsir-content">
          <h2>Professor</h2>
          <h1>Mohammad Hassanul Islam</h1>
          <h3>Department Head</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
            officia quam, odit, eveniet vero veniam provident libero sapiente
            veritatis, minus ducimus vitae possimus! Nam aliquam consequatur
            optio nostrum repellendus et?
          </p>
          <a target="blank" href="https://www.facebook.com/surajit.barua.9">
        <button className="hero-about-btn blue">
          <LuFacebook />
        </button>
        </a>
        </div>
      </div>
    </>
  );
}
