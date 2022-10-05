import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from "./App";
import Home from "./pages/Home";
import Login from "./pages/Login";
import RecoverPassword from "./pages/RecoverPassword";
import SignUp from "./pages/SignUp";
import Places from "./pages/Places";
import FactoryMonitoring from "./pages/FactoryMonitoring";
import NewMeasurement from "./pages/NewMeasurement";

import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/recover-password" element={<RecoverPassword />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/places" element={<Places />} />
          <Route path="/factory-monitoring" element={ <FactoryMonitoring />} />
          <Route path="/new-measurement" element={<NewMeasurement />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
