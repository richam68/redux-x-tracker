import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import FilterTab from "./FilterTab";
import { useSelector, useDispatch } from "react-redux";
import { deleteExpense } from "../../redux/BudgetSlice";

const ExpenseTable = () => {
  const { budget } = useSelector((store) => store.budgetPage);
  const [expenseList, setExpenseList] = useState(budget.expenses); //it will only run when component is getting mounted for the first time
  const dispatch = useDispatch();

  useEffect(() => {
    setExpenseList(budget.expenses);
  }, [budget.expenses]);

  const handleDelete = (name, category, amount) => {
    dispatch(deleteExpense({ name, category, amount }));
  };

  return (
    <div>
      <FilterTab setExpenseList={setExpenseList} />
      <br />
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Transactions</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>

        {Boolean(expenseList.length) ? (
          <tbody>
            {expenseList.map((ele, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{ele.name}</td>
                <td>{ele.category}</td>
                <td>Rs. {ele.amount}</td>
                <td>
                  <button
                    onClick={() =>
                      handleDelete(ele.name, ele.category, ele.amount)
                    }
                    style={{
                      backgroundColor: "black",
                      color: "white",
                      borderRadius: 10,
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody>
            <tr>
              <td className="expense-table">No Data is available </td>
            </tr>
          </tbody>
        )}
      </Table>
    </div>
  );
};

export default ExpenseTable;
