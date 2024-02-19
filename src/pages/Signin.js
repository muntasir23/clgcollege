import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../component/Loading";
import { useAuth } from "../context/AuthContext";
import logo from "../data/new_logo.svg";


export default function Signin() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfrimPass] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState();

  const navigate = useNavigate();

  const { signup } = useAuth();

  async function handlesubmit(e) {
    e.preventDefault();
    //
    if (password !== confirmPass) {
      return setError("Password don't match!");
    }

    try {
      setError("");
      setLoading(true);
      await signup(email, password, username);
      navigate("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Failed to create an account!");
    }
  }

  return (
    <div className="auth-holder">
      <div className="auth-box">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div>
          <h1>Create a new account!</h1>
        </div>

        <div>
          <p>User Name</p>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <p>Email address</p>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <p>User Password</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <p>Confrim Password</p>
          <input
            type="password"
            value={confirmPass}
            onChange={(e) => setConfrimPass(e.target.value)}
            required
          />
        </div>
        <div>
          <button disabled={loading} onClick={handlesubmit}>
            {loading && (
              <>
              <Loading />
              </>
            )}
            {!loading && "Submit"}
          </button>
        </div>
        <div>
          {error && <input type="text" value={error} className="errorinput" />}
        </div>
      </div>
    </div>
  );
}
