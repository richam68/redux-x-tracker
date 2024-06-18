import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addExpense } from "../../redux/BudgetSlice";
import { useSnackbar } from "notistack";
import ExpenseTable from "./ExpenseTable";
import expenseValidation from "../../utilityFunction/ExpenseFormValidation";
import { incrementExpense } from "../../redux/ExpenseSlice";

const NewExpenseForm = ({ setConfirmExceedAmount }) => {
  const { budget } = useSelector((store) => store.budgetPage);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const [name, setName] = useState("");
  //Initial category selection
  const [selectedCategory, setSelectedCategory] = useState();
  const [amount, setAmount] = useState("");

  let remainingAmount = budget.category[selectedCategory];

  const handleSelectCategory = (e) => {
    e.preventDefault();
    setSelectedCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount > remainingAmount) {
      const confirm = window.confirm(
        "Are you sure you want to exceed the budget?"
      );
      if (confirm) {
        setConfirmExceedAmount(true);
      } else {
        setName("");
        setSelectedCategory("");
        setAmount("");
        enqueueSnackbar("Expense Cancelled Succesfully", {
          variant: "success",
        });
        return;
      }
    }

    let isValid = expenseValidation(name, selectedCategory, amount);
    if (isValid.validate) {
      dispatch(
        addExpense({
          name,
          category: selectedCategory,
          amount: parseFloat(amount),
        })
      );
      dispatch(
        incrementExpense({ amount: parseInt(amount), selectedCategory })
      );

      setName("");
      setSelectedCategory("");
      setAmount("");
      enqueueSnackbar("Added Succesfully", { variant: "success" });
    } else {
      enqueueSnackbar(isValid.message, { variant: "error" });
    }
  };

  return (
    <div className="d-flex gap-3 m-4">
      <div className="w-50 d-flex flex-column justify-content-center align-items-center bg-dark text-white p-4 ">
        <h2>
          <i>New Expense Form</i>
        </h2>
        <form
          className="d-flex flex-column justify-content-center "
          onSubmit={handleSubmit}
        >
          <label>Expense Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Select Category</label>
          <select value={selectedCategory} onChange={handleSelectCategory}>
            <option defaultValue={"Select from dropdown"}>
              Select from dropdown
            </option>
            {Object.entries(budget.category).map(([key, value], id) => (
              <option key={key} value={key}>
                {key[0].toUpperCase() + key.slice(1)}
              </option>
            ))}
          </select>

          <label>Expense Amount:</label>
          <input
            type="text"
            name="category"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <br />
          <button type="submit" className="button">
            Submit
          </button>
        </form>
      </div>

      <div style={{ flex: 1 }}>
        <ExpenseTable />
      </div>
    </div>
  );
};

export default NewExpenseForm;
