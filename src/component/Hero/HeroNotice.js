import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebaseConfigue";
import "./HeroNotice.css";
import banner from "../../data/noticebanner.jpg";
import clglogo from '../../data/collegelogo.png'
import deptlogo from '../../data/new_logo.svg'
import { Link } from "react-router-dom";
import AllumniForm from "./AllumniForm";

export default function HeroNotice() {
  const [notice, setNotice] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const articleRef = collection(db, "Notice");
    const q = query(articleRef, orderBy("createdAt", "desc"), limit(3));
    onSnapshot(q, (snapshot) => {
      const article = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNotice(article);
      setLoading(false);
    });
  }, []);

  console.log(loading, notice);

  return (
    <div className="hero-notice-holder">
      <div className="hero-notice-div">
        <div>
          <h1>Recents Notice</h1>
        </div>
        <div className="hero-notive-banner">
          <img alt="" src={banner} />
        </div>
        <div>
          {notice.map((value, index) => (
            <>
            <Link to="notice" key={index}>
              <div className="hero-notice-details">
                <h2>#{value.title}</h2>
                <h4>{value.desc}</h4>
                <p>{value.createdAt.toDate().toDateString()}</p>
              </div>
            </Link>
            </>
          ))}
        </div>
      </div>
      <div className="design-demos">
        <div>
          <h1>Alumni From</h1>
        </div>
        <div className="design-demos-banner">
           <img alt="" src={clglogo} />
           <img alt="" src={deptlogo} />
        </div>
        {/* <div className="design-demos-inputs">
          <p>Name</p>
          <input type="text" placeholder="example name" />
          <p>Email</p>
          <input type="text" placeholder="example name" />
          <p>Phone</p>
          <input type="number" placeholder="127***" />
          <p>Company Name</p>
          <input type="text" placeholder="example name" />
          <p>Designation</p>
          <input type="text" placeholder="example name" />
          <p>Session</p>
          <input type="text" placeholder="example name" />
          <p></p>
          <button>Submit</button>
        </div> */}
        <AllumniForm />
      </div>
    </div>
  );
}
