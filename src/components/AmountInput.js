import React, { Component } from "react";
import "../styles/AmountInput.css";

class AmountInput extends Component {
  state = {
    amount: 0,
  };

  handleChange = (e) => {
    this.setState({
      amount: e.target.value,
    });
    this.props.amountChange(this.state.amount);
  };

  componentDidUpdate() {
    if (this.state.amount !== this.props.amount) {
      this.props.amountChange(this.state.amount);
    }
  }

  render() {
    return (
      <div className="amountInput">
        <h1>Amount</h1>
        <input
          type="number"
          value={this.state.amount}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default AmountInput;
