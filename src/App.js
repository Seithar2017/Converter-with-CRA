import React, { Component } from "react";
import "./styles/App.css";
import AmountInput from "./components/AmountInput";
import UnitInput from "./components/UnitInput";
import ResultOutput from "./components/ResultOutput";

class App extends Component {
  units = [
    [false, "kg", "dag", "gram", "stone", "tone"],
    [false, "pl", "usd", "euro", "gbp"],
  ];

  state = {
    activeFrom: "",
    activeTo: "",
    amount: "",
    result: "",
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
  handleChangeResult = (result) => {
    this.setState({
      result,
    });
  };
  convert = (uF, uT, amount) => {
    debugger;
    if (uF === uT) return amount;
    const main = this.convertToMainUnit(uF);
    const conversion = this.convertAnyFromMain(uT, main);
    return amount * conversion;
  };
  convertAnyFromMain = (uT, main) => {
    debugger;
    if (uT === "main") return main;
    else if (uT === "dag") return main * 100;
    else if (uT === "gram") return main * 1000;
    else if (uT === "stone") return main * 0.157473044;
    else if (uT === "tone") return main * 0.0001;
    else if (uT === "usd") return main * 3.72;
    else if (uT === "euro") return main * 4.4;
    else if (uT === "gbp") return main * 4.87;
  };
  convertToMainUnit = (uF) => {
    debugger;
    // The main unit as weight is the KG unit
    if (uF === "dag") return 0.01;
    else if (uF === "gram") return 0.001;
    else if (uF === "stone") return 6.35029318;
    else if (uF === "tone") return 1000;
    else if (uF === "kg") return 1;
    //The main unit as cash is the PL unit
    else if (uF === "usd") return 0.27;
    else if (uF === "euro") return 0.23;
    else if (uF === "gbp") return 0.21;
    else if (uF === "pl") return 1;
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
            database={this.units}
            state={this.state}
            unitChangeFrom={this.handleChangeFrom}
            unitChangeTo={this.handleChangeTo}
            convert={this.convert}
            updateResult={this.handleChangeResult}
          />
          <ResultOutput result={this.state.result} />
        </div>
      </div>
    );
  }
}

export default App;
