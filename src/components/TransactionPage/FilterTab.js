import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";
import { changeFilterStatus } from "../../redux/filterTableSlice";

const FilterTab = ({ setExpenseList }) => {
  const { budget } = useSelector((store) => store.budgetPage);
  const [selectedTab, setSelectedTab] = useState(0);
  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
    const selectedCategory = newValue;
    executeFilterCategory(selectedCategory);
    dispatch(changeFilterStatus(selectedCategory));
  };

  const executeFilterCategory = (category) => {
    if (category === "All") {
      setExpenseList(budget.expenses);
    } else {
      setExpenseList(
        budget.expenses.filter((list) => {
          return (
            list.category.toLowerCase().trim() === category.toLowerCase().trim()
          );
        })
      );
    }
  };

  return (
    <div>
      <h3>
        <i>Filter Data On the basis of Categories:</i>
      </h3>
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={selectedTab}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
          TabIndicatorProps={{
            style: { backgroundColor: "ThreeDDarkShadow", color: "Menu" },
          }}
        >
          <Tab value="All" label="All" />
          {Object.keys(budget.category).map((ele, i) => (
            <Tab key={i} value={ele} label={ele} />
          ))}
        </Tabs>
      </Box>
    </div>
  );
};

export default FilterTab;
