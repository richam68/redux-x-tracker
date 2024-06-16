import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  setUserName,
  setBudget,
  setCategories,
  addExpense,
} from "../../redux/landingPageSlice";
import { useSnackbar } from "notistack";
import ExpenseTable from "./ExpenseTable";

const NewExpenseForm = () => {
  const { budget } = useSelector((store) => store.landingPage);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const [name, setName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(
    "Select from dropdown"
  ); // Initial category selection
  const [amount, setAmount] = useState("");
  const [showExpenseTable, setShowExpenseTable] = useState(false);

  const handleSelectCategory = (e) => {
    e.preventDefault();
    setSelectedCategory(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
 
    dispatch(
      addExpense({
        name,
        category: selectedCategory,
        amount: parseFloat(amount),
      })
    );
    setShowExpenseTable(true);
    setName("");
    setSelectedCategory("");
    setAmount("");
    enqueueSnackbar("Added Succesfully", { variant: "success" });
  };
  return (
    <div className="d-flex gap-3 m-4">
      <div className="w-25 d-flex flex-column justify-content-center align-items-center bg-dark text-white p-4 ">
        <h2>
          <i>New Expense Form</i>
        </h2>
        <form
          className="d-flex flex-column justify-content-center"
          onSubmit={handleSubmit}
        >
          <label>Expense Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Select Category:</label>
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

      <div>{showExpenseTable && <ExpenseTable />}</div>
    </div>
  );
};

export default NewExpenseForm;
