import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
