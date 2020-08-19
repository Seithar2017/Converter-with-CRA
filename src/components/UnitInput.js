import React from "react";

const UnitInput = (props) => {
  return (
    <form>
      <label htmlFor="from">From: </label>
      <input list="from" />
      <datalist id="from">
        <option value="CM"></option>
        <option value="M"></option>
      </datalist>

      <label htmlFor="To">To: </label>
      <input list="To" />
      <datalist id="To">
        <option value="CM"></option>
        <option value="M"></option>
      </datalist>
      <button>Convert</button>
    </form>
  );
};

export default UnitInput;
