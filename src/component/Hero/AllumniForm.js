import axios from "axios";
import React, { useState } from "react";
import Loading from "../Loading";

export default function AllumniForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [designation, setDesignantion] = useState("");
  const [session, setSession] = useState("");


  //LOADING

  const [loading, setLoading] = useState(false)
 
  const handleSubmit = (e) => {
    setLoading(true)
    e.preventDefault();
    axios
      .post("https://studentsbackend-v1du.onrender.com/api/allumni", {
        name,
        email,
        phone,
        companyName,
        designation,
        session,
      })
      .then((result) => {
        console.log(result);
        window.location.reload();
        alert("Your Form Has Submited");
        setLoading(false)
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="design-demos-inputs">
      <p>Name</p>
      <input
        type="text"
        placeholder="example name"
        onChange={(e) => setName(e.target.value)}
      />
      <p>Email</p>
      <input
        type="text"
        placeholder="example@gmail.com"
        onChange={(e) => setEmail(e.target.value)}
      />
      <p>Phone</p>
      <input
        type="number"
        placeholder="127***"
        onChange={(e) => setPhone(e.target.value)}
      />
      <p>Company Name</p>
      <input
        type="text"
        placeholder="Comapany Name"
        onChange={(e) => setCompanyName(e.target.value)}
      />
      <p>Designation</p>
      <input
        type="text"
        placeholder="Your Designation"
        onChange={(e) => setDesignantion(e.target.value)}
      />
      <p>Session</p>
      <input
        type="text"
        placeholder="Put Your Hons Session"
        onChange={(e) => setSession(e.target.value)}
      />
      <p></p>
      <button onClick={handleSubmit}>
        {loading && <Loading />}
        {!loading && "Submit"}
      </button>
    </div>
  );
}
