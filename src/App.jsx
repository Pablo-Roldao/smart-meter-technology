import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

class App extends React.Component {

  render() {
    return (
      <div id="app-container">
        <Navbar />
        <Outlet />
      </div>
    );
  }
}

export default App;