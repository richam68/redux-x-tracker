import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import NewExpenseForm from "./NewExpenseForm";
import { useNavigate } from "react-router-dom";
import { setUserName, setBudget, setCategories } from "../../redux/BudgetSlice";
import { useDispatch } from "react-redux";

const Transactions = () => {
  const { budget } = useSelector((store) => store.budgetPage);
  const { amount, category } = useSelector((store) => store.expenseSlice);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [confirmExceedAmount, setConfirmExceedAmount] = useState(false);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [balances, setBalances] = useState({});

  useEffect(() => {
    const calculateTotalExpenses = () => {
      let total = 0;
      Object.values(category).forEach((expense) => {
        total += parseFloat(expense || 0);
      });
      setTotalExpenses(total);
    };

    const calculateBalances = () => {
      const updatedBalances = {};
      Object.entries(budget.category).forEach(([key, value]) => {
        const categoryExpenses = parseFloat(category[key] || 0);
        updatedBalances[key] = value - categoryExpenses;
      });
      setBalances(updatedBalances);
    };

    calculateTotalExpenses();
    calculateBalances();
  }, [category, budget]);

  const addDataFromTransactionPage = () => {
    // Set all amounts in expenses.categories to an empty string
    const updatedCategories = Object.entries(budget.category).map(
      ([key, value], id) => {
        return { value: "" };
      }
    );

    dispatch(setUserName(""));
    dispatch(setBudget(""));
    dispatch(setCategories(updatedCategories));
    navigate("/");
  };

  const handleBack = () => {
    navigate("/");
  };

  // const calculateTotalExpenses = (category) => {
  //   // return budget.expenses.filter((ele) => ele.category === category)
  //   // .reduce((total, current) => total + parseFloat(current.amount), 0)
  // }

  return (
    <div>
      <br />
      <div className="d-flex justify-content-evenly align-items-center">
        <h3>{budget.name}'s Monthly Expenditure</h3>
        <div className="d-flex justify-content-space-between align-items-center gap-4">
          <button className="button" onClick={addDataFromTransactionPage}>
            New Tracker
          </button>

          <button className="button" onClick={handleBack}>
            Update/Go Back
          </button>
        </div>
      </div>
      <br />
      <h3>
        <i>Insight Section</i>
      </h3>
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
              <button
                className={`btn-trasaction ${
                  confirmExceedAmount ? "exceed" : "within"
                }`}
              >
                {confirmExceedAmount ? "exceed" : "within"}
              </button>
            </td>
            <td>{budget.totalBudget}</td>
            {/* <td>{budget.expenses.reduce((total, current) => total + parseFloat(current.amount), 0)}</td> */}
            <td>{totalExpenses}</td>
            <td>{budget.totalBudget - totalExpenses}</td>
          </tr>
          {Object.entries(budget.category).map(([key, value], id) => {
            // const totalExpenses = calculateTotalExpenses(key); //wrong way to pass function inside map, only if there is not other option then apply this action
            //let balance = value - category[key];
            let balance = balances[key];

            let status = balance >= 0 ? "within" : "exceed";

            return (
              <tr key={id}>
                <td>{key[0].toUpperCase() + key.slice(1)}</td>

                <td>
                  <button
                    className={`btn-trasaction ${
                      status === "exceed" ? "exceed" : "within"
                    }`}
                  >
                    {status}
                  </button>
                </td>

                {/* each key has fixed total budget */}
                <td>{value}</td>
                <td>{category[key]}</td>
                <td>{value - category[key]}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <br />
      {/* {showTracker && <NewExpenseForm />} */}
      <NewExpenseForm setConfirmExceedAmount={setConfirmExceedAmount} />
    </div>
  );
};

export default Transactions;
