import React, { Component } from "react";
import "./styles/App.css";
import AmountInput from "./components/AmountInput";
import UnitInput from "./components/UnitInput";
import ResultOutput from "./components/ResultOutput";

//to extend database with new group of units, simply add a new array in "units" below, with first element set as false, followed by strings containig name of units e.g [false, "mile", "kilometer", "meter", "centimeter"],
//To implement converting operations see method convertToMainUnit() and convertAnyFromMainUnit()

class App extends Component {
  units = [
    [false, "kg", "dag", "gram", "stone", "tone"],
    [false, "pln", "usd", "euro", "gbp"],
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
  //To add new conversion on new database, you need to specify which unit from the database you want to be your main. As you choose the main unit, add conditional "else if" with ratio on conversion for each unit from your database to main unit in convertToMainUnit() method.
  //e.g: database: [false, "meter", "mile", "decimeter", "kilometer"]. You decide to choose kilometer as your main unit.
  //In the convertToMainUnit() you need to add:
  //else if(uF === "meter") return 1000;
  //else if(uF === "mile") return 0.62;
  //e.t.c

  // The next step to implement new database is to update convertAnyFromMain() method.
  //uT stands for the name of unit that conversion is beeing made to, main stands for the ratio of converting unit to main unit based on convertToMainUnit() method.
  //Add conditional "else if" with ratio on conversion for each unit from your database to main unit.
  //e.g: your new database: [false, "meter", "mile", "decimeter", "kilometer"]. You've chosen kilometer as your main unit.
  //In convertAnyFromMain() add:
  //else if (uT === "meter") return main * 0.001;
  //else if (uT === "mile") return main * 1.609344;
  //e.t.c
  convert = (uF, uT, amount) => {
    // debugger;
    if (uF === uT) return amount;
    const main = this.convertToMainUnit(uF);
    const conversion = this.convertAnyFromMain(uT, main);
    return amount * conversion;
  };
  convertAnyFromMain = (uT, main) => {
    // debugger;
    if (uT === "kg" || uT === "pln") return main;
    else if (uT === "dag") return main * 100;
    else if (uT === "gram") return main * 1000;
    else if (uT === "stone") return main * 0.157473044;
    else if (uT === "tone") return main * 0.001;
    else if (uT === "usd") return main * 0.27;
    else if (uT === "euro") return main * 0.23;
    else if (uT === "gbp") return main * 0.21;
  };

  convertToMainUnit = (uF) => {
    // The main unit as weight is the KG unit
    // debugger;
    if (uF === "dag") return 0.01;
    else if (uF === "gram") return 0.001;
    else if (uF === "stone") return 6.35029318;
    else if (uF === "tone") return 1000;
    else if (uF === "kg") return 1;
    //The main unit as cash is the PLN unit
    else if (uF === "usd") return 3.72;
    else if (uF === "euro") return 4.4;
    else if (uF === "gbp") return 4.87;
    else if (uF === "pln") return 1;
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
