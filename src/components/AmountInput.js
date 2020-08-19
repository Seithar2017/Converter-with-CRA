import React, { Component } from "react";
import "../styles/AmountInput.css";

class AmountInput extends Component {
  state = {
    amount: 0,
  };
  render() {
    return (
      <div className="amountInput">
        <h1>Amount</h1>
        <input type="number" />
      </div>
    );
  }
}

export default AmountInput;
