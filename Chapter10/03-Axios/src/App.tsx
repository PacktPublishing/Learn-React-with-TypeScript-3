import React, { Component } from "react";
import "./App.css";
import { Header } from "./Header";

class App extends Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
      </div>
    );
  }
}

export default App;
