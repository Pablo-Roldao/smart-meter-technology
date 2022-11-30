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

import "./index.css";

import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";
import SignUpConfirmation from './pages/SignUpConfirmation';
Amplify.configure(awsExports);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/recover-password" element={<RecoverPassword />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="sign-up-confirmation" element={<SignUpConfirmation />}/>
          <Route path="/" element={<Places />} />
          <Route path="/factory-monitoring" element={ <FactoryMonitoring />} />
          <Route path="/new-measurement" element={<NewMeasurement />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
