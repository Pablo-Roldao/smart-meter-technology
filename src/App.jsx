import React from "react";
import Login from "./pages/Login";
import RecoverPassword from "./pages/RecoverPassword";
import SignUp from "./pages/SignUp";

class App extends React.Component {
  render() {
    return (
      <>
        <Login />
        <RecoverPassword />
        <SignUp />
      </>
    );
  }
}

export default App;