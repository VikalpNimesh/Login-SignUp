import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { DataProvider } from "./contexts/context.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import InnerPage from "./pages/InnerPage/InnerPage.jsx";
import Todo from "./pages/todo page/Todo.jsx";
import SignIn from "./pages/SignIn/SignIn.jsx";
import SignUp from "./pages/SignUp/SignUp.jsx";
import Protected from "./components/Protected.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  //   <React.StrictMode>
  <DataProvider>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/signin" element={<SignIn />} /> */}
        {/* <Route path="/signup" element={<SignUp />} /> */}
        <Route path="/todo" element={<Todo />} />
        <Route path="/InnerPage" element={<InnerPage />} />
        <Route
          path="/"
          element={
            <Protected>
              <App />
            </Protected>
          }
        />
        <Route
          path="/signin"
          element={
            <Protected>
              <SignIn />
            </Protected>
          }
        />
        <Route
          path="/signup"
          element={
            <Protected>
              <SignUp />
            </Protected>
          }
        />
      </Routes>
    </BrowserRouter>
  </DataProvider>
  //   </React.StrictMode>
);
