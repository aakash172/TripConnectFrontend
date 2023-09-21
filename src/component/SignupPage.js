import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "./Header";

export default function SignupPage() {
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [cpassword, setCpassword] = useState();
  // axios.post("/signup");

  function Register(e) {
    e.preventDefault();
    if (cpassword !== password) {
      alert(`Password and Confirm password does't match.`);
      return;
    }
    axios.post("/signup", {
      userName,
      email,
      password,
    });
  }

  return (
    <>
      <Header />
      <h1 className="text-3xl font-bold text-center mt-16	">Register</h1>
      <form className="max-w-xl text-center mx-auto my-3" onSubmit={Register}>
        <input
          type="text"
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Enter your Name"
        />
        <br />
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your Email"
        />
        <br />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
        />
        <br />
        <input
          type="password"
          onChange={(e) => setCpassword(e.target.value)}
          placeholder="Confirm Your Password"
        />
        <br />
        {cpassword && cpassword !== password && (
          <>
            <span className="text-red-500">
              Password and Confirm password does't match.
            </span>
          </>
        )}
        <input type="submit" />
        <div className="text-lg">
          Already Registered ?{" "}
          <Link to="/signin" className="underline font-semibold">
            Login
          </Link>
        </div>
      </form>
    </>
  );
}
