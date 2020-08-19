import React, { Component } from "react";
import "../styles/UnitInput.css";

class UnitInput extends Component {
  state = {
    activeFrom: "",
    activeTo: "",
  };
  render() {
    return (
      <form>
        <div className="from">
          <label htmlFor="from">From: </label>
          <input list="from" />
          <datalist id="from">
            <option value="CM"></option>
            <option value="M"></option>
          </datalist>
        </div>

        <div className="to">
          <label htmlFor="To">To: </label>
          <input list="To" />
          <datalist id="To">
            <option value="CM"></option>
            <option value="M"></option>
          </datalist>
        </div>
        <button>Convert</button>
      </form>
    );
  }
}

export default UnitInput;
