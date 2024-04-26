const ShowExpenses = ({ expenses, setExpenses }) => {
  console.log(expenses);

  const handelDelete = (id) => {
    setExpenses(expenses.filter((exp) => exp.id !== id));
  };

  let filterValue;
  if (expenses.categories === "All categories")
    setExpenses(
      expenses.filter((exp) => exp.categories === "All categories")
    );
  if (expenses.categories === "Groceries")
    setExpenses(
      expenses.filter((exp) => exp.categories === "Groceries")
    );
  if (expenses.categories === "Utilities")
    setExpenses(
      expenses.filter((exp) => exp.categories === "Utilities")
    );
  if (expenses.categories === "Entertaiment")
    setExpenses(
      expenses.filter((exp) => exp.categories === "Entertaiment")
    );

  console.log(expenses);
  return (
    <div className="bg-gray-200 flex flex-col items-center m-3 h-72 w-9/12 p-2 gap-2">
      <h1>Filter data by Categories</h1>
      <select name="" id="">
        <option value={expenses.categories}>All Categories</option>
        <option value={expenses.categories}>Groceries</option>
        <option value={expenses.categories}>Utilities</option>
        <option value={expenses.categories}>Entertaiment</option>
      </select>
      <table className="flex flex-col gap-2">
        <thead className="w-full flex gap-40">
          <th>Descriptions</th>
          <th>Amount</th>
          <th>Categories</th>
        </thead>
        {expenses.map((items) => {
          return (
            <tbody className="w-full flex gap-40">
              <td>{items.desc}</td>
              <td>{items.amount}</td>
              <td>{items.categories}</td>
              <button
                className="bg-red-400 p-1 rounded "
                onClick={() => handelDelete(items.id)}
              >
                Delete
              </button>
            </tbody>
          );
        })}
        <tfoot>
          {" "}
          <tr>
            {" "}
            <th>Total :{expenses.amount} </th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ShowExpenses;
