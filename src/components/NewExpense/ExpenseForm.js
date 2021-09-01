import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  // Multiple State Approach
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // One State Approach
  // const [input, setInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  function handleTitleChange(evt) {
    // One State Approach
    // setInput({ ...input, enteredTitle: evt.target.value }); // This is not the preferred way

    // Use prevState
    // setInput((prevState) => {
    //   return { ...prevState, enteredTitle: evt.target.value };
    // });

    setEnteredTitle(evt.target.value); // Multiple States Approach
  }

  function handleAmountChange(evt) {
    // One State Approach
    // setInput({ ...input, enteredAmount: evt.target.value });  // This is not the preferred way

    // Use prevState
    // setInput((prevState) => {
    //   return { ...prevState, enteredAmount: evt.target.value };
    // });

    setEnteredAmount(evt.target.value); // Multiple States Approach
  }

  function handleDateChange(evt) {
    // One State Approach
    // setInput({ ...input, enteredDate: evt.target.value });  // This is not the preferred way

    // Use prevState
    // setInput((prevState) => {
    //   return { ...prevState, enteredDate: evt.target.value };
    // });

    setEnteredDate(evt.target.value); // Multiple States Approach
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    // console.log(expenseData);
    props.onAddExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={handleTitleChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={handleAmountChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            step="2022-12-31"
            onChange={handleDateChange}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.handleStopEditing}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
