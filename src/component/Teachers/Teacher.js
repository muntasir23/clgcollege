// import React from 'react'
import { LuFacebook } from "react-icons/lu";
import sir4 from '../../data/faisalsir.jpg';
import sir1 from "../../data/lailaMam.jpg";
import sir3 from '../../data/mam.jpg';
import sir2 from '../../data/surujitsir.jpg';

import "./Teacher.css";


export default function Teacher() {
  return (
    <div className="teacher-main">
    
    <div className="teacher-container">
      <div className="teacher-image">
        <img alt="" src={sir1} />
      </div>
      <div className="teacher-content">
        <h1>Laila Arjuman Banu</h1>
        <h3>Associate Professor</h3>
        <h3>email@gmail.com</h3>
        <a target="blank" href="https://www.facebook.com/lailaarjuman.banu.33">
        <button className="hero-about-btn blue">
          <LuFacebook />
        </button>
        </a>
      </div>
    </div>

    <div className="teacher-container">
      <div className="teacher-image">
        <img alt="" src={sir2} />
      </div>
      <div className="teacher-content">
        <h1>Surajit Barua</h1>
        <h3>Assistant Professor</h3>
        <h3>email@gmail.com</h3>
        <a target="blank" href="https://www.facebook.com/surajit.barua.9">
        <button className="hero-about-btn blue">
          <LuFacebook />
        </button>
        </a>
      </div>
    </div>

    <div className="teacher-container">
      <div className="teacher-image">
        <img alt="" src={sir3} />
      </div>
      <div className="teacher-content">
        <h1>Jesmin Akter</h1>
        <h3>Assistant Professor</h3>
        <h3>email@gmail.com</h3>
        <a target="blank" href="https://www.facebook.com/jesmin.akther.560">
        <button className="hero-about-btn blue">
          <LuFacebook />
        </button>
        </a>
      </div>
    </div>

    <div className="teacher-container">
      <div className="teacher-image">
        <img alt="" src={sir4} />
      </div>
      <div className="teacher-content">
        <h1>Faisal Mohammad Mainol Quader</h1>
        <h3>Assistant Professor</h3>
        <h3>email@gmail.com</h3>
        <a target="blank" href="https://www.facebook.com/faisal.quader.9">
        <button className="hero-about-btn blue">
          <LuFacebook />
        </button>
        </a>
      </div>
    </div>
    </div>
  );
}
