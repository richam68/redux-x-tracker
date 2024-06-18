import React, { useState } from "react";
import "./heroSection.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setUserName, setBudget, setCategories } from "../../redux/BudgetSlice";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import validation from "../../utilityFunction/FormValidation";

const Form = () => {
  // const { name , totalBudget, category } = useSelector((store) => store.budgetPage.budget);
  const { budget } = useSelector((store) => store.budgetPage);

  const [name, setName] = useState(budget.name);
  const [totalBudget, setTotalBudget] = useState(budget.totalBudget);
  const [category, setCategory] = useState({
    food: budget.category.food,
    travel: budget.category.travel,
    utilities: budget.category.utilities,
    // others: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  // useEffect(() => {
  //   const checkFormCompleteness = () => {
  //   let isCategoryComplete = Object.values(category).every(value => value !== "");
  //   let isComplete = name.trim !== '' || totalBudget.trim !== '' || isCategoryComplete;
  //   setIsFormComplete(isComplete)
  //   }
  //   checkFormCompleteness()
  // }, [name, totalBudget, category])

  const handleSubmit = (e) => {
    e.preventDefault();

    // Convert input values to numbers for validation
    let parsedBudget = totalBudget;

    //travel: parseFloat(category.travel) || 0,
    let parsedCategory = {
      food: category.food || 0,
      travel: category.travel || 0,
      utilities: category.utilities || 0,
      // others: category.others || 0,
    };

    let isValid = validation(name, parsedBudget, parsedCategory);

    if (isValid.validate) {
      dispatch(setUserName(name));
      dispatch(setBudget(parsedBudget));
      dispatch(setCategories(parsedCategory));

      navigate("/transaction");
      enqueueSnackbar("Submitted Succesfully", { variant: "success" });
    } else {
      enqueueSnackbar(isValid.message, { variant: "error" });
    }
  };

  return (
    <div>
      <h4>Please fill in the below form to start tracking</h4>
      <br />
      <form
        onSubmit={handleSubmit}
        className="d-flex flex-column w-100 justify-content-center align-items-center"
      >
        <div>
          <label htmlFor="name">Enter you name: </label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Please enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label htmlFor="budget">Enter your monthly budget: </label>
          <input
            id="budget"
            type="number"
            name="budget"
            placeholder="Enter budget amount"
            value={totalBudget}
            onChange={(e) => {
              const value = e.target.value.trim(); // Trim any whitespace
              if (value === "") {
                setTotalBudget(null); // setTotalBudget(undefined)
              } else {
                setTotalBudget(Number(value));
              }
            }}
          />
        </div>

        <br />
        <br />
        <h4>Fill your monthly categorial budget</h4>
        <br />
        <table style={{ width: "80%", padding: 10 }}>
          <thead>
            <tr>
              <th>Food</th>
              <th>Travel</th>
              <th>Utilities</th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td>
              <input
                type="number"
                name="food"
                placeholder="Enter amount"
                value={category.food}
                onChange={(e) =>
                  setCategory({
                    ...category, //joh phele se ha woh bhi retain karnge
                    [e.target.name]: Number([e.target.value.trim()]),
                  })
                }
              />
            </td>
            <td>
              <input
                type="number"
                name="travel"
                placeholder="Enter amount"
                value={category.travel}
                onChange={(e) =>
                  setCategory({
                    ...category,
                    [e.target.name]: Number([e.target.value.trim()]),
                  })
                }
              />
            </td>
            <td>
              <input
                type="number"
                name="utilities"
                placeholder="Enter amount"
                value={category.utilities}
                onChange={(e) =>
                  setCategory({
                    ...category,
                    [e.target.name]: Number([e.target.value.trim()]),
                  })
                }
              />
            </td>
          </tr>
          </tbody>
        </table>
        <br />
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
