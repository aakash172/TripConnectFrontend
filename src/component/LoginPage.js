import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "./Header";

export default function LoginPage() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  // axios.post("/signup");

  function Login(e) {
    e.preventDefault();
    
    axios.post("/signin", {
      email,
      password,
    });
  }

  return (
    <>
    <Header/>
      <h1 className="text-3xl font-bold text-center mt-16 mx-auto	">Login</h1>
      <form className="max-w-xl text-center mx-auto my-3" onSubmit={Login}>
        
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
        
       
        <input type="submit" />
        <div className="text-lg">
          Not Registered ?{" "}
          <Link to="/signup" className="underline font-semibold">
            Register here
          </Link>
        </div>
      </form>
    </>
  );
}
