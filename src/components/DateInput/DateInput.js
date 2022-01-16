import React from "react";

const DateInput = props => (
    <form onSubmit={props.changeDate}>
      Enter a date (YYYY-MM-DD):&nbsp;
      <input />
      <input type="submit" />
    </form>
  );

export default DateInput;