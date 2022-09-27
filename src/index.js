import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from "./App";
import Home from "./pages/Home";
import Login from './pages/Login';
import RecoverPassword from './pages/RecoverPassword';
import SignUp from './pages/SignUp';

/*const router = createBrowserRouter([
  {
    path: "/",
    element: (
        <Home />
    ),
  },
  {
    path: "/login",
    element: (
      <Login />
    )
  },
  {
    path: "/recover-password",
    element: (
      <RecoverPassword />
    )
  },
  {
    path: "/sign-up",
    element: (
      <SignUp />
    )
  },
]);*/

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/recover-password" element={<RecoverPassword />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
