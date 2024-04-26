import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

const expenses = [];
// get all expenses

app.get('/expenses',(req,res)=>{
})

// create Expense

app.post("/expenses", (req, res) => {
  const { desc, amount, category } = req.body;

  const newdata = {
    desc: desc,
    amount: amount,
    category: category,
  };
  expenses.push(newdata);

  res.status(201).json({
    ok: true,
    data: newdata,
  });
});
const PROT = 8000;
app.listen(PROT, () => console.log(`server is running on Port ${PROT}`));
