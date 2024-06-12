import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  setName,
  setBudget,
  setCategory,
  validateBudgets,
  error,
} from "../redux/slice/landingPageSlice";

const NewExpenseForm = () => {
  const { expenses } = useSelector((store) => store.landingPage);
  const dispatch = useDispatch();

  return (
    <div className="w-25 d-flex flex-column justify-content-center align-items-center bg-dark text-white p-4 ">
      <h2>
        <i>New Expense Form</i>
      </h2>
      <form className="d-flex flex-column justify-content-center ">
        <label>Expense Name:</label>
        <input type="text" name="name" value={expenses.name} />

        <label>Select Category:</label>
        <select>
          <option defaultValue={"Select from dropdown"}>
            Select from dropdown
          </option>
          {expenses.categories.map((item) => (
            <option>{item.category}</option>
          ))}
        </select>

        <label>Expense Amount:</label>
        <input type="text" />
        <br />
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewExpenseForm;
