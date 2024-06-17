import React, { useState } from "react";
import { useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import NewExpenseForm from "./NewExpenseForm";
import { useNavigate } from "react-router-dom";
import {
  setUserName,
  setBudget,
  setCategories,
  backButton
} from "../../redux/BudgetSlice";
import { incrementExpense } from "../../redux/ExpenseSlice"
import { useDispatch } from "react-redux";

const Transactions = () => {
  const { budget } = useSelector((store) => store.budgetPage);
  const { amount, category } = useSelector((store) => store.expenseSlice)
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const addDataFromTransactionPage = () => {
    // Set all amounts in expenses.categories to an empty string
    const updatedCategories = Object.entries(budget.category).map(([key, value], id) => {
      return {value: ''}
    })

    dispatch(setUserName(''));
    dispatch(setBudget(''));
    dispatch(setCategories(updatedCategories))
    navigate("/");
  };

  const handleBack = () => {
    navigate("/");
  };

// const calculateTotalExpenses = (category) => {
//   // return budget.expenses.filter((ele) => ele.category === category)
//   // .reduce((total, current) => total + parseFloat(current.amount), 0)
  
// }

console.log(category, "val")
  return (
    <div>
      <br />
      <div className="d-flex justify-content-evenly align-items-center">
        <h3>{budget.name}'s Monthly Expenditure</h3>
        <div className="d-flex justify-content-space-between align-items-center gap-4">
        <button className="button" onClick={addDataFromTransactionPage}>
          New Tracker
        </button>
        {/* <button className="button" onClick={handleButton}>
          New Expense
        </button> */}
        <button className="button" onClick={handleBack}>
          {" "}
          update/Go Back
        </button>
        </div>
      </div>
      <br />
      <h3><i>Insight Section</i></h3>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Category</th>
            <th>Limit Status</th>
            <th>Budget</th>
            <th>Expenses</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>All</td>
            <td>
              <button>within</button>
            </td>
            <td>{budget.totalBudget}</td>
            {/* <td>{budget.expenses.reduce((total, current) => total + parseFloat(current.amount), 0)}</td> */}
            <td>{amount}</td>
            <td>{budget.totalBudget}</td>
          </tr>
          {Object.entries(budget.category).map(([key, value], id) => {
            // const totalExpenses = calculateTotalExpenses(key);
            return(
              
            <tr key = {id}>
              <td>{key[0].toUpperCase() + key.slice(1)}</td>
              {value ? (
                <td>
                  <button>
                    {value < value - category[key] ? "within" : "excced"}
                  </button>
                </td>
              ) : (
                <td>Add Data</td>
              )}
              {/* each key has fixed total budget */}
              <td>{value}</td>
              <td>{category[key]}</td>
              <td>{value - category[key]}</td>
            </tr>
          )}) }
        </tbody>
      </Table>
      <br />
      {/* {showTracker && <NewExpenseForm />} */}
      <NewExpenseForm />
    </div>
  );
};

export default Transactions;
