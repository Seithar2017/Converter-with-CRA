import React, { Component } from "react";
import "../styles/UnitInput.css";

class UnitInput extends Component {
  state = {
    activeFrom: "",
    activeTo: "",
  };

  handleChange = (e) => {
    const name = e.target.name;
    this.setState({
      [name]: e.target.value,
    });
  };

  handleClick = (e) => {
    const name = e.target.name;
    this.setState({
      [name]: "",
    });
    console.log(e.target);
  };

  componentDidUpdate() {
    if (this.props.state.activeFrom !== this.state.activeFrom) {
      this.props.unitChangeFrom(this.state.activeFrom);
    }
    if (this.props.state.activeTo !== this.state.activeTo) {
      this.props.unitChangeTo(this.state.activeTo);
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { activeFrom, activeTo, amount } = this.props.state;
    if (this.state.activeFrom && this.state.activeTo && amount > 0) {
      const result = this.props.convert(activeFrom, activeTo, amount);
      this.props.updateResult(result);
    } else {
      this.props.updateResult("Incorrect values");
    }
  };
  render() {
    const measures = this.props.database.map((measure) => {
      return (
        <option key={measure} value={measure}>
          {measure}
        </option>
      );
    });

    return (
      <form>
        <div className="from">
          <label htmlFor="from">From: </label>
          <select
            list="from"
            name="activeFrom"
            value={this.state.activeFrom}
            onChange={this.handleChange}
            id="from"
          >
            <option style={{ display: "none" }} disabled label=" "></option>
            {measures}
          </select>
        </div>

        <div className="to">
          <label htmlFor="To">To: </label>
          <select
            list="to"
            name="activeTo"
            value={this.state.activeTo}
            onChange={this.handleChange}
            id="to"
          >
            <option style={{ display: "none" }} disabled label=" "></option>
            {measures}
          </select>
        </div>
        <button onClick={this.handleSubmit}>Convert</button>
      </form>
    );
  }
}

export default UnitInput;
