import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

const expenses = [];

// get all expenses
app.get("/expenses", (req, res) => {
  res.status(200).json({
    ok: true,
    data: expenses,
  });
});

// get  expenses by id
app.get("/expenses/:id", (req, res) => {
  const id = req.params.id;
  const singeExpense = expenses.find((expense) => expense.id === id);

  if (singeExpense) {
    return res.send({
      ok: true,
      data: singeExpense
    });
  }
  res.status(404).send({
    ok: false,
    msg: "Expense not found"
  });
});
// create Expense

app.post("/expenses", (req, res) => {
  const { desc, amount, category } = req.body;

  const newdata = {
    id: Math.trunc(Math.random() * 1000) + "",
    desc: desc,
    amount: amount,
    category: category,
  };
  expenses.push(newdata);

  res.status(201).send({
    ok: true,
    data: newdata,
  });
});

// updat expense

app.put("/expenses/:id", (req, res) => {
  const expenseToBeUpdate = expenses.find(
    (expense) => expense.id === req.params.id
  );
  if (!expenseToBeUpdate) {
    res.status(404).json({
      ok: false,
      msg: "expense not found",
    });
  }

  const updatedExpense = { ...expenseToBeUpdate, ...req.body };

  res.send({
    ok: true,
    data: updatedExpense,
  });
});

// delete the expenses

app.delete("/expenses/:id", (req, res) => {
  const id = req.params.id;
  const idx = expenses.findIndex((expense) => expense.id === id);

  if (idx === -1) {
    res.status(404).json("expense not found");
  }
  const [deletedExpense] = expenses.splice(idx, 1);

  res.status(200).json({
    msg: "expense has been deleted",
    data: deletedExpense,
  });
});
const PROT = 8000;
app.listen(PROT, () => console.log(`server is running on Port ${PROT}`));
