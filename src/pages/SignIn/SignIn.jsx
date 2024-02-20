import React, { useState } from "react";
import "./SignIn.css";
import  secureLocalStorage  from  "react-secure-storage";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const [result, setResult] = useState(false)


  console.log(username);
  const getData =  (e) => {
    e.preventDefault()
    
    try {
      const localUsername =  secureLocalStorage.getItem('Username');
      const localPassword =  secureLocalStorage.getItem('Password');

      // console.log(localUsername,localPassword);

      if(localUsername == username && localPassword == password ){
        setResult(true)
        setTimeout(() => {
          navigate("/")
        }, 2000);
      }
    } catch (error) {
      // setResult(true)
      console.log(error);
    }
  };
  return (
    <div>
      <div className="container">
        <form className="form">
          <h1>LogIn</h1>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={(e) => setusername(e.target.value)}
            placeholder="Enter your Username"
          />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" value={password}
            onChange={(e) => setPassword(e.target.value)} placeholder="Enter your Password"/>
            
          <button type="submit" onClick={getData}>
            Submit
          </button>
          <Link to="/signup">Create a User</Link>
          {result && <h1>Sign In Successfully</h1>}

        </form>
      </div>
    </div>
  );
};

export default SignIn;
