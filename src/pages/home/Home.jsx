import { useEffect, useState } from "react";
import "./Home.css";
import  secureLocalStorage  from  "react-secure-storage";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [result, setResult] = useState(false);
  const [user, setUser] = useState(null)

  const logout =  () => {
    try {
       secureLocalStorage.removeItem("Username");
       secureLocalStorage.removeItem("Password");
       setResult(true)
      setTimeout(() => {
        navigate("/signin");
        window.location.reload()
      }, 2000);
      setResult(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let username = secureLocalStorage.getItem("Username");
setUser(username)
  }, [])
  

  return (
    <main>
      <div className="nav">
        <button>Home-Page</button>
        <button onClick={logout}>LogOut</button>
      </div>
        {result && <h1>Logout up successfully</h1>}
        <h1> login as : {user}</h1>
    </main>
  );
};

export default Home;
