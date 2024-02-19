import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../component/Loading";
import { useAuth } from "../context/AuthContext";
import logo from "../data/new_logo.svg";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState();

  const { login } = useAuth();
  const navigate = useNavigate();
  async function handlesubmit(e) {
    e.preventDefault();
    //

    try {
      setError("");
      setLoading(true);
      await login(email, password);
      navigate("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Failed to login!");
    }
  }

  return (
    <div className="auth-holder">
      <div className="auth-box">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div>
          <h1>Login to your account</h1>
        </div>

        <div>
          <p>Email address</p>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p>User Password</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button disabled={loading} onClick={handlesubmit}>
            {loading && (
              <>
              <Loading />
              </>
            )}
            {!loading && "Login"}
          </button>
        </div>
        <div>
          {error && <input type="text" value={error} className="errorinput" />}
        </div>
      </div>
    </div>
  );
}
