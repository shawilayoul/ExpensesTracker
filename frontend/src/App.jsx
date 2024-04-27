import { useState } from "react";
import ExpenseForm from "./componenents/ExpenseForm";
import ExpensesFilter from "./componenents/ExpensesFilter";
import ShowExpenses from "./componenents/ShowExpenses";

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const handelonSubmit = (data) => {
    setExpenses((prev) => [
      ...prev,
      {
        id: Math.trunc(Math.random() * 1000) + "",
        desc: data.desc,
        amount: data.amount,
        categories: data.categories,
      },
    ]);
  };
  console.log(expenses)
  console.log(selectedCategory)

  let visibelExpenses = selectedCategory? expenses.filter((expense)=>expense.categories === selectedCategory) : expenses
  return (
    <div>
      <ExpenseForm  handelonSubmit={handelonSubmit}/>
      <ExpensesFilter setSelectedCategory={setSelectedCategory} />
      <ShowExpenses  expenses={visibelExpenses} setExpenses={setExpenses}/>
    </div>
  );
};

export default App;
