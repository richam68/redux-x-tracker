import React, { useState } from "react";
import "./heroSection.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  setName,
  setBudget,
  setCategory,
} from "../redux/slice/landingPageSlice";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import validation from "../utility/validation";

const Form = () => {
  const [name, setName] = useState("");
  const [totalBudget, setTotalBudget] = useState("");
  const [category, setCategory] = useState({
    food: '',
    travel: '',
    utilities: '',
    others: '',
  });

  const { budget } = useSelector((store) => store.landingPage);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  console.log("expense", budget);

  const handleSubmit = (e) => {
    console.log("data", e);
    e.preventDefault();

    let isValid = validation(name, totalBudget, category);

    if (isValid.validate) {
      dispatch(setName(name))
      dispatch(setBudget(totalBudget))
      dispatch(setCategory(category));

      // navigate("/transaction");
      enqueueSnackbar("Submitted Succesfully", { variant: "success" });
    }

    enqueueSnackbar(isValid.message, { variant: "error" });
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
            type="text"
            name="budget"
            placeholder="Enter budget amount"
            value={totalBudget}
            onChange={(e) => setTotalBudget(e.target.value)}
           
          />
        </div>

        <br />
        <br />
        <h4>Fill your monthly categorial budget</h4>
        <br />
        <table style={{ width: "80%", padding: 10 }}>
          <tr>
            <th>Food</th>
            <th>Travel</th>
            <th>Utilities</th>
            <th>Others</th>
          </tr>
          <tr>
            <td>
              <input
                type="text"
                name="food"
                placeholder="Enter amount"
                value={category.food}
                onChange={(e) =>
                  setCategory({
                    ...category, //joh phele se ha woh bhi retain karnge
                    [e.target.name]: Number([e.target.value]),
                  })
                }
              
              />
            </td>
            <td>
              <input
                type="text"
                name="travel"
                placeholder="Enter amount"
                value={category.travel}
                onChange={(e) =>
                  setCategory({
                    ...category,
                    [e.target.name]: Number([e.target.value]),
                  })
                }
             
              />
            </td>
            <td>
              <input
                type="text"
                name="utilities"
                placeholder="Enter amount"
                value={category.utilities}
                onChange={(e) =>
                  setCategory({
                    ...category,
                    [e.target.name]: Number([e.target.value]),
                  })
                }
             
              />
            </td>
            <td>
              <input
                type="text"
                name="others"
                placeholder="Enter amount"
                value={category.others}
                onChange={(e) =>
                  setCategory({
                    ...category,
                    [e.target.name]: Number([e.target.value]),
                  })
                }
              />
            </td>
          </tr>
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
