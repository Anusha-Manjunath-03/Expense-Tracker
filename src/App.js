import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const expensesArray = [];

const App = () => {
  const [expenses, setExpenses] = useState(expensesArray);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  const deleteExpenseHandler = expenseId=>{
    setExpenses(prevExpenses =>{
      const ex = prevExpenses.filter(expense =>expense.id !== expenseId)
      return ex
    })
  }

  let content = <p/>

  if(expenses.length > 0){
    content = (<Expenses items={expenses} onDeleteExpense = {deleteExpenseHandler}/>)
  }

  return (
    <div>
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
   </div>
    <div>{content}</div>
    </div>
  );
};

export default App;
