import React from "react";

const ExpensesFilter = ({ setSelectedCategory }) => {
  return (
    <div className="flex flex-col mb-3 items-center w-screen">
      <h1>Filter expenses by Categories</h1>
      <select
        name=""
        id=""
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="Groceries">Groceries</option>
        <option value="Utilities">Utilities</option>
        <option value="Entertaiment">Entertaiment</option>
      </select>
    </div>
  );
};

export default ExpensesFilter;
