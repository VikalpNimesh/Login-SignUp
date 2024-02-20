// Protected.jsx
import React, { useEffect } from "react";
import secureLocalStorage from "react-secure-storage";
import { useNavigate } from "react-router-dom";

const Protected = ({ children }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!secureLocalStorage.getItem("Username")) {
            navigate("/signin");
        }
    }, [navigate]); 
    useEffect(() => {
        if (secureLocalStorage.getItem("Username")) {
            navigate("/");
        }
    }, [navigate]); 


    return secureLocalStorage.getItem("Username") ? children : null;
};

export default Protected;
