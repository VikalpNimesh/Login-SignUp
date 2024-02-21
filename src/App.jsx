// App.jsx
import React from "react";
import { DataProvider } from "./contexts/context";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Protected from "./components/Protected";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import Home from "./pages/home/Home";
import Landing from "./pages/landing page/Landing";
import secureLocalStorage from 'react-secure-storage';

const App = () => {
  const user = secureLocalStorage.getItem("Username");

  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/landing" element={<Landing />} />
          <Route path="/signin" element={!user ? <SignIn /> : <Navigate to="/" replace /> } />
          <Route path="/signup" element={!user ? <SignUp /> : <Navigate to="/" replace /> } />
          <Route element={<Protected />}>
            <Route path="/" element={<Home />} />
            {/* {!user && <Route path="*" element={<Navigate to="/signin" replace />} />} */}
            {/* {user && <Route path="*" element={<Navigate to="/" replace />} />} */}
          </Route>
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
};

export default App;
