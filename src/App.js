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
  convert = (uF, uT, amount) => {
    const kg = this.convertToKg(uF);
    const conversion = this.convertAnyFromKg(kg, uT);
    return amount * uT;
  };
  convertAnyFromKg = (uT, kg) => {
    if (uT === "kg") return kg;
    else if (uT === "dag") return kg * 100;
    else if (uT === "g") return kg * 1000;
    else if (uT === "stone") return kg * 0.157473044;
    else if (uT === "t") return kg * 0.0001;
  };
  convertToKg = (uF) => {
    if (uF === "dag") return uF * 0.01;
    else if (uF === "g") return uF * 0.001;
    else if (uF === "stone") return uF * 6.35029318;
    else if (uF === "t") return uF * 1000;
    else if (uF === "kg") return uF;
  };
  render() {
    return (
      <div className="app">
        <div className="panel">
          <AmountInput
            amount={this.state.amount}
            amountChange={this.handleChangeAmount}
          />
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
