import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseFrom = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const [enteredAmount, setEnteredAmount] = useState("");
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const [enteredDate, setEnteredDate] = useState("");
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
    seteEnteredFalse((event.target.value = false));
  };

  const [enteredfalse, seteEnteredFalse] = useState(false);
  const toFalse = (event) => {
    seteEnteredFalse((event.target.value = true));
  };

  const toTrue = (event) => {
    seteEnteredFalse((event.target.value = false));
  };

  let addExpense__Button = <button onClick={toFalse}>Add Expenses</button>;

  if (enteredfalse === true) {
    addExpense__Button = (
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            ></input>
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={enteredAmount}
              onChange={amountChangeHandler}
            ></input>
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              value={enteredDate}
              onChange={dateChangeHandler}
            ></input>
          </div>
        </div>
        <div className="new-expense__actions">
          <button onClick={toTrue}>Cancel</button>
          <button type="submit">Add expense</button>
        </div>
      </form>
    );
  } else {
    addExpense__Button = <button onClick={toFalse}>Add Expenses</button>;
  }

  return <div>{addExpense__Button}</div>;
};

export default ExpenseFrom;
