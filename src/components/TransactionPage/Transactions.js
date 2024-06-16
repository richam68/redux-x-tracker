import React, { useState } from "react";
import { useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import NewExpenseForm from "./NewExpenseForm";
import { useNavigate } from "react-router-dom";
import {
  setUserName,
  setBudget,
  setCategories,
} from "../../redux/landingPageSlice";
import { useDispatch } from "react-redux";

const Transactions = () => {
  const { budget } = useSelector((store) => store.landingPage);
  console.log("expenses", budget.category);
  const navigate = useNavigate();
  const [showTracker, setShowTracker] = useState(false);
  const dispatch = useDispatch();

  const handleButton = () => {
    setShowTracker(!showTracker);
  };

  const addDataFromTransactionPage = () => {
  
    // Set all amounts in expenses.categories to an empty string
    const updatedCategories = Object.entries(budget.category).map(([key, value], id) => {
      console.log(value, "value")
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

const calculateTotalExpenses = (category) => {
  return budget.expenses.filter((ele) => ele.category === category)
  .reduce((total, current) => total + parseFloat(current.amount), 0)
}


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
            <td>0</td>
            <td>{budget.totalBudget}</td>
          </tr>
          {Object.entries(budget.category).map(([key, value], id) => {
            console.log("value", value)
            const totalExpenses = calculateTotalExpenses(key);
            console.log(totalExpenses, "1")

            return(
            <tr key = {id}>
              <td>{key[0].toUpperCase() + key.slice(1)}</td>
              {value ? (
                <td>
                  <button>
                    {value < budget.totalBudget ? "within" : "excced"}
                  </button>
                </td>
              ) : (
                <td>Add Data</td>
              )}
              <td>{value}</td>
              <td>{totalExpenses}</td>
              
              {/* each key has fixed total budget */}
              <td>{value}</td>
            </tr>
          )})}
        </tbody>
      </Table>
      <br />
      {showTracker && <NewExpenseForm />}
    </div>
  );
};

export default Transactions;
