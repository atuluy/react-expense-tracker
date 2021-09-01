import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);

  function handleAddExpenseData(addedExpenseData) {
    const expenseData = {
      ...addedExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  }

  function handleStartEditing() {
    setIsEditing(true);
  }

  function handleStopEditing() {
    setIsEditing(false);
  }

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={handleStartEditing}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onAddExpenseData={handleAddExpenseData}
          handleStopEditing={handleStopEditing}
        />
      )}
    </div>
  );
}

export default NewExpense;
