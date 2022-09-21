import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from "./pages/Home";
import Login from './pages/Login';
import RecoverPassword from './pages/RecoverPassword';
import SignUp from './pages/SignUp';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
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
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
