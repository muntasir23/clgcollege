import React from "react";
import { FaComputer } from "react-icons/fa6";
import { LuLibrary } from "react-icons/lu";
import { PiStudentBold } from "react-icons/pi";
import "./Details.css";

export default function Details() {
  return (
    <>
      <h1 className="hero-details-h1">
        About The Department & About Our Survices
      </h1>
      <p className="hero-details-p">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum
      </p>
      <div className="hero-about">
        <div className="hero-about-card">
          <button className="hero-about-btn green">
            <LuLibrary />
          </button>
          <h3 className="green-h3">Seminar</h3>
          <p>
            Here you can find all the book list according to your year. It will
            show what course you have to take and all the reference book list.
          </p>
        </div>

        <div  className="hero-about-card">
          <button  className="hero-about-btn">
            <FaComputer />
          </button>
          <h3 className="red-h3">Computer Lab</h3>
          <p>
            We have the largest computer lab in Chittagong College. More than 40+ computer are present in our deparment
          </p>
        </div>

        <div  className="hero-about-card">
          <button  className="hero-about-btn blue">
          <PiStudentBold />
          </button>
          <h3 className="blue-h3">Students Sections</h3>
          <p>
            We have the largest computer lab in Chittagong College. More than 40+ computer are present in our deparment
          </p>
        </div>
      </div>
    </>
  );
}
