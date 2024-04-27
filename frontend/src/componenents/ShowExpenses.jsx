const ShowExpenses = ({ expenses, setExpenses }) => {
  const handelDelete = (id) => {
    setExpenses(expenses.filter((exp) => exp.id !== id));
  };

  console.log(expenses);
  return (
    <div className="flex flex-col  items-center w-screen">
      <table className="bg-gray-200 flex flex-col   gap-2 p-2  w-9/12">
        <thead>
          <tr className="flex justify-between border-2  border-rose-600">
            <th>Descriptions</th>
            <th>Amount</th>
            <th>Categories</th>
            <th></th>
          </tr>
        </thead>
        {expenses.map((items) => {
          return (
            <tbody key={items.id} className="flex justify-between ">
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
          <tr>
            <th>Total:</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ShowExpenses;
