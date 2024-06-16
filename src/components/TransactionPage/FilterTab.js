import React, { useEffect, useState } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useSelector, useDispatch } from 'react-redux';
import {changeFilterStatus} from "../../redux/filterTableSlice";
import ExpenseTable from './ExpenseTable';

const FilterTab = ({setExpenseList}) => {

    const { budget } = useSelector((store) => store.landingPage);
    const dispatch = useDispatch();

    // const [value, setValue] = React.useState('one');
    const [selectedTab, setSelectedTab] = useState(0);
    const [filterExpense, setFilterExpense] = useState([]);
    const [categories, setCategories] = useState(['All']);

    useEffect(() => {
      setCategories(['All', ...Object.keys(budget.category)])
    }, [budget.category]);


    const handleChange = (event, newValue) => {
      
      console.log("data", event, newValue)
      setSelectedTab(newValue)

      //const selectedCategory = categories[newValue];
      const selectedCategory = newValue;
      console.log(selectedCategory, "selectedCategory")

      executeFilterCategory(selectedCategory);
      console.log(selectedCategory);
      dispatch(changeFilterStatus(newValue));
      // setValue(newValue);
    };

    const executeFilterCategory = ( category ) => {
      console.log(category);
      if(category==="All"){
        setExpenseList(budget.expenses);
      }else{
         setExpenseList(
           budget.expenses.filter(
             (list) =>
               list.category.toLowerCase().trim() ===
               category.toLowerCase().trim()
           )
         );
      }
     
    }
console.log("filterExpense", filterExpense)
  return (
    <div>
        <h3><i>Filter Data On the basis of Categories:</i></h3>
         <Box sx={{ width: '100%' }}>
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
        <Tab value="All" label="All"/>
        {Object.keys(budget.category).map((ele, i) => <Tab key={i+""+ele} value={ele} label={ele} />)}
       
      </Tabs>

      
      </Box>
    </div>
  )
}

export default FilterTab