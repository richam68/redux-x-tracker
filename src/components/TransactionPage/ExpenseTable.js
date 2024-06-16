import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import FilterTab from "./FilterTab";
import { useSelector, useDispatch } from "react-redux";
import { deleteExpense } from "../../redux/landingPageSlice";

const ExpenseTable = () => {
  const { budget } = useSelector((store) => store.landingPage);
  const { filterStatus } = useSelector((store) => store.filterPage);
  const [expenseList, setExpenseList] = useState(budget.expenses); // it will only run when component is getting mounted for the first time
  const dispatch = useDispatch() 
  console.log(filterStatus); 
  console.log(filterStatus); 

  useEffect(() => {
    setExpenseList(budget.expenses);
  }, [budget.expenses]);

  const handleDelete = (name, category, amount) => {
    console.log("check", name, category, amount);
    dispatch(deleteExpense({name, category, amount}))
  }

  return (
    <div>
      <FilterTab setExpenseList={setExpenseList} />
      <br />
      <Table responsive>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Transactions</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>

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
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ExpenseTable;
