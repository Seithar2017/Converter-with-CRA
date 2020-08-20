import React, { Component } from "react";
import "../styles/UnitInput.css";

class UnitInput extends Component {
  state = {
    activeFrom: "",
    activeTo: "",
  };

  handleChange = (e) => {
    const name = e.target.name;
    if (name === "activeFrom") {
      this.setState({
        activeTo: "",
      });
    }
    this.setState({
      [name]: e.target.value,
    });
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
    // Preparing list of units for display in FROM label
    let measures = this.props.database.flat(Infinity);
    measures = measures.filter(
      (measure) => measure !== false && measure !== true
    );

    measures = measures.map((measure) => {
      return (
        <option key={measure} value={measure}>
          {measure}
        </option>
      );
    });

    // Preparing list of units for display in TO label

    const length = this.props.database.length;
    //The loop is going to mark first element of an array that is going to be active in TO label as 'true'
    // and as 'false' the arrays that are not going to be shown in TO label
    for (let i = 0; i < length; i++) {
      const index = this.props.database[i].findIndex(
        (unit) => unit === this.state.activeFrom
      );
      if (index !== -1) {
        this.props.database[i][0] = true;
      } else if (index === -1) {
        this.props.database[i][0] = false;
      }
    }

    //The loop is going to take units from array that its first element is set as true and put them in measureTo(already as and option)
    let measuresTo = [];
    for (let i = 0; i < length; i++) {
      if (this.props.database[i][0]) {
        measuresTo = this.props.database[i].map((measure) => {
          if (measure !== true) {
            return (
              <option key={measure} value={measure}>
                {measure}
              </option>
            );
          } else return null;
        });
      }
    }
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
            {measuresTo}
          </select>
        </div>
        <button onClick={this.handleSubmit}>Convert</button>
      </form>
    );
  }
}

export default UnitInput;
