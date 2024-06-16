import React, { useEffect, useState } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useSelector, useDispatch } from 'react-redux';
import changeFilterStatus from "../../redux/filterTableSlice";
import ExpenseTable from './ExpenseTable';

const FilterTab = () => {

    const { filterStatus } = useSelector((store) => store.filterPage);
    const { budget } = useSelector((store) => store.landingPage);
    const dispatch = useDispatch();

    // const [value, setValue] = React.useState('one');
    const [selectedTab, setSelectedTab] = useState(0);
    const [filterExpense, setFilterExpense] = useState([]);
    const [categories, setCategories] = useState(['All']);

    useEffect(() => {
      setCategories(['All', ...Object.keys(budget.category)])
    }, [budget.category]);


    const handleChange = (data, newValue) => {
      
      console.log("data", data, newValue)
      setSelectedTab(newValue)

      //const selectedCategory = categories[newValue];
      const selectedCategory = newValue;
      console.log(selectedCategory, "selectedCategory")

      executeFilterCategory(selectedCategory);
      dispatch(changeFilterStatus(selectedCategory));
      // setValue(newValue);
    };

    const executeFilterCategory = ( category ) => {
      console.log(category)
      if(category === "All"){
        setFilterExpense(budget.expenses.map((ele) => {
          console.log(ele) 
          return ele}))
      }else{
        let find = budget.expenses.findIndex((ele) => {
          console.log("ele", ele)
          console.log(ele.category === category)
          return ele.category === category
        })
        console.log(find)
        setFilterExpense(find)
        // setFilterExpense(budget.expenses.filter((ele) => {
        //   console.log("ele", ele)
        //   console.log(ele.category === category)
        //   return ele.category === category
        // } ))
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
        {Object.keys(budget.category).map((ele, i) => <Tab key={i} value={ele} label={ele} />)}
       
      </Tabs>

      
      </Box>
    </div>
  )
}

export default FilterTab