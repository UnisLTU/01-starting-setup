import React from "react";
import './ExpenseDate.css'

const ExpenseDate = (props) => {
  const month = props.dateTime.toLocaleString("en-US", { month: "long" });
  const day = props.dateTime.toLocaleString("en-US", { day: "2-digit" });
  const year = props.dateTime.getFullYear();

  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{month} </div>
      <div className='expense-date__year'>{year}</div>
      <div className='expense-date__day'>{day}</div>
    </div>
  );
};

export default ExpenseDate;
