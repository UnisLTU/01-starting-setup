import React, { useState } from "react";
import ExpenseItem from "../Expenses/ExpenseItem";
import "../Expenses/Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangedValue={filterChangeHandler}
      />
      {props.item.map(expense => <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}/>
      )}
    </Card>
  );
};

export default Expenses;
