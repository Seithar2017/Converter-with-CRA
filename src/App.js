import React, { Component } from "react";
import "./styles/App.css";
import AmountInput from "./components/AmountInput";
import UnitInput from "./components/UnitInput";
import ResultOutput from "./components/ResultOutput";

class App extends Component {
  units = ["kg", "dag", "gram", "stone", "tone"];

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
    if (uF === uT) return amount;
    const kg = this.convertToKg(uF);
    const conversion = this.convertAnyFromKg(uT, kg);
    return amount * conversion;
  };
  convertAnyFromKg = (uT, kg) => {
    if (uT === "kg") return kg;
    else if (uT === "dag") return kg * 100;
    else if (uT === "gram") return kg * 1000;
    else if (uT === "stone") return kg * 0.157473044;
    else if (uT === "tone") return kg * 0.0001;
  };
  convertToKg = (uF) => {
    if (uF === "dag") return 0.01;
    else if (uF === "gram") return 0.001;
    else if (uF === "stone") return 6.35029318;
    else if (uF === "tone") return 1000;
    else if (uF === "kg") return 1;
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
