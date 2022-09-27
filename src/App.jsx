import React from "react";
import { Outlet } from "react-router-dom";

class App extends React.Component {

  render() {
    return (
      <div id="app-container">
        <Outlet />
      </div>
    );
  }
}

export default App;