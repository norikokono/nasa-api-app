import React from "react";
import "./DateInput.css"

const DateInput = props => (
    <form onSubmit={props.changeDate}>
      Enter a date (DD-MM-YYYY):&nbsp;&nbsp;
      <input type="date" />
      <input type="submit" value="Submit" className="dateInput-button" />
    </form>
  );

export default DateInput;