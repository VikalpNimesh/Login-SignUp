// Protected.jsx
import secureLocalStorage from "react-secure-storage";
import {  Outlet, Navigate } from "react-router-dom";

const Protected = ({children}) => {
  const user = secureLocalStorage.getItem("Username");
  console.log("protected" ,user);
  if(!user){
    return <Navigate to="/landing" replace />
  }
  
  

  return children ? children : <Outlet /> 
};

export default Protected;
