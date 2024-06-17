import React, {useState} from "react";
import Table from "react-bootstrap/Table";
import FilterTab from "./FilterTab";
import { useSelector, useDispatch } from "react-redux";
import { deleteExpense } from "../../redux/BudgetSlice";

const ExpenseTable = () => {
  const { budget } = useSelector((store) => store.budgetPage);
  const dispatch = useDispatch()
  const [filterData, setFilterData] = useState(["All"]);
  console.log("filterData", filterData);


  const handleDelete = (name, category, amount) => {
    console.log("check", name, category, amount);
    dispatch(deleteExpense({name, category, amount}))
  }


  return (
    <div>
      <FilterTab setFilterData={setFilterData}/>
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
          {budget.expenses.map((ele, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{ele.name}</td>
              <td>{ele.category}</td>
              <td>Rs. {ele.amount}</td>
              <td>
              <button onClick={() => handleDelete(ele.name, ele.category, ele.amount)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ExpenseTable;
