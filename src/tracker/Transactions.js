import React, { useState } from "react";
import { useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import NewExpenseForm from "./NewExpenseForm";
import { useNavigate } from "react-router-dom";
import {
  setName,
  setBudget,
  setCategory,
  error,
} from "../redux/slice/landingPageSlice";
import { useDispatch } from "react-redux";

const Transactions = () => {
  const { budget } = useSelector((store) => store.landingPage);
  console.log("expenses", budget);
  const navigate = useNavigate();
  const [showTracker, setShowTracker] = useState(false);
  const dispatch = useDispatch();

  const handleButton = () => {
    setShowTracker(!showTracker);
  };

  const addDataFromTransactionPage = () => {
  
    // Set all amounts in expenses.categories to an empty string
    const updatedCategories = budget.category.map((ele) => {
        return { ...ele, amount: 0 };
      });

    dispatch(setName(''));
    dispatch(setBudget(''));
    dispatch(setCategory({categories: updatedCategories}))
    navigate("/");
  };

  const handleBack = () => {
    navigate("/");
  };


  return (
    <div>
      <br />
      <div className="d-flex justify-content-evenly align-items-center">
        <h3>{budget.name}'s Monthly Expenditure</h3>
        <button className="button" onClick={addDataFromTransactionPage}>
          New/Update Tracker
        </button>
        <button className="button" onClick={handleButton}>
          New Tracker
        </button>
        <button className="button">Update Budget</button>
        <button className="button" onClick={handleBack}>
          {" "}
          Go Back
        </button>
      </div>
      <br />
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
              <button>check</button>
            </td>
            <td>{budget.totalBudget}</td>
            <td>0</td>
            <td>{budget.totalBudget}</td>
          </tr>
          {Object.keys(budget.category).map((ele, id) => (
            <tr key = {id}>
              <td>{ele[0].toUpperCase() + ele.slice(1)}</td>
              {ele.amount ? (
                <td>
                  <button>
                    {ele.amount < budget.totalBudget ? "within" : "excced"}
                  </button>
                </td>
              ) : (
                <td>Add Data</td>
              )}
              <td>{budget.category[ele]}</td>
              <td>0</td>
              <td>{budget.category[ele]}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <br />
      {showTracker && <NewExpenseForm />}
    </div>
  );
};

export default Transactions;
