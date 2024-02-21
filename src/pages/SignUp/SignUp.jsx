import React, { useState } from "react";
// import "../SignIn.css";
import  secureLocalStorage  from  "react-secure-storage";
import  {Link, useNavigate}  from "react-router-dom";

const SignUp = () => {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const [result, setResult] = useState(false)
  // console.log(username);
  const StoreData =  (e) => {
e.preventDefault()
    try {
       secureLocalStorage.setItem("Username", username);
       secureLocalStorage.setItem("Password", password);
      setResult(true)
      setTimeout(() => {
        navigate("/signin")
      }, 1000);      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="container">
        <form className="form">
          <h1>SignUp</h1>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            required
            name="username"
            id="username"
            value={username}
            onChange={(e) => setusername(e.target.value)}
            placeholder="Enter your Username"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            required
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your Password"
          />

          <button type="submit" onClick={StoreData}>
            SignUp
          </button>
          <Link to="/signin">Already a user</Link>

          {result && <h1>Sign up successfully</h1>}
        </form>
      </div>
    </div>
  );
};

export default SignUp;
