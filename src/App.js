import React, { Component } from "react";
import "./styles/App.css";
import AmountInput from "./components/AmountInput";
import UnitInput from "./components/UnitInput";
import ResultOutput from "./components/ResultOutput";

class App extends Component {
  units = {
    weight: [
      { control: false },
      { kg: "kg" },
      { dag: "dag" },
      { g: "g" },
      { st: "stone" },
      { t: "t" },
    ],
    measure: [
      { control: false },
      { m: "meter" },
      { ml: "mile" },
      { cm: "centimeter" },
      { dm: "decimeter" },
    ],
  };

  state = {
    activeFrom: "",
    activeTo: "",
    amount: 0,
  };

  handleChangeFrom = (value) => {
    this.setState({
      activeFrom: value,
    });
  };
  handleChangeTo = (value) => {
    this.setState({
      activeTo: value,
    });
  };
  handleChangeAmount = (value) => {
    this.setState({
      amount: value,
    });
  };

  render() {
    return (
      <div className="app">
        <div className="panel">
          <AmountInput amountChange={this.handleChangeAmount} />
          <UnitInput
            units={this.units}
            unitChangeFrom={this.handleChangeFrom}
            unitChangeTo={this.handleChangeTo}
          />
          <ResultOutput state={this.state} />
        </div>
      </div>
    );
  }
}

export default App;
