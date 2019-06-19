import React, { Component } from "react";
import "./App.scss";
import TheHeader from "./components/TheHeader";
import TheFooter from "./components/TheFooter";
import TheBody from "./components/TheBody";
import TheNav from "./components/TheNav";

class App extends Component {
  render() {
    return (
      <div className="app">
        <TheHeader />
        <TheBody />
        <TheNav />
        <TheFooter />
      </div>
    );
  }
}

export default App;
