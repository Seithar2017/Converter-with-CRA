import React, { Component } from "react";
import "./styles/App.css";
import AmountInput from "./components/AmountInput";
import UnitInput from "./components/UnitInput";
import ResultOutput from "./components/ResultOutput";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="app">
        <div className="panel">
          <AmountInput />
          <UnitInput />
          <ResultOutput />
        </div>
      </div>
    );
  }
}

export default App;
