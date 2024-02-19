import axios from "axios";
import React, { useState } from "react";
import Loading from "../Loading";

export default function AddStudents() {
  const [name, setName] = useState();
  const [reg, setReg] = useState();
  const [roll, setRoll] = useState();
  const [session, setSession] = useState();
  const [days, setDays] = useState();
  const [attendence, seAttendence] = useState();
  const [cata, setCata] = useState();

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    axios
      .post("https://studentsbackend-v1du.onrender.com/api/students", {
        name,
        reg,
        roll,
        session,
        days,
        attendence,
        cata,
      })
      .then((result) => {
        console.log(result);
        window.location.reload();
        alert("Submited");
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="from">
        <h1> Add New Student</h1>
        <div className="addstudenstForm">
          {" "}
          <div className="two-input-holder">
            <div>
              <p>Student Name</p>
              <input type="text" onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
              <p>Student Registration</p>
              <input type="text" onChange={(e) => setReg(e.target.value)} />
            </div>
          </div>
          <div className="two-input-holder">
            <div>
              <p>Student Session</p>
              <input type="text" onChange={(e) => setSession(e.target.value)} />
            </div>
            <div>
              <p>Student ClassRoll</p>
              <input type="text" onChange={(e) => setRoll(e.target.value)} />
            </div>
          </div>
          <div className="two-input-holder">
            <div>
              <p>Total Class</p>
              <input type="number" onChange={(e) => setDays(e.target.value)} />
            </div>
            <div>
              <p>Total Attendence</p>
              <input
                type="number"
                onChange={(e) => seAttendence(e.target.value)}
              />
            </div>
          </div>
          <div className="two-input-holder">
            <div>
              <p>Select Student Catagory</p>
              <select
                onChange={(e) => setCata(e.target.value)}
                className="select"
              >
                <option>Select </option>
                <option>Hons </option>
                <option>Masters </option>
                <option>Degree </option>
                <option>Inter</option>
              </select>
            </div>
            <div className="empty"></div>
          </div>
        </div>
        <div className="two-input-holder">
          <button onClick={handleSubmit}>
            {loading && <Loading />}
            {!loading && "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
}
