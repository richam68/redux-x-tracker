import React, { useState } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useSelector, useDispatch } from 'react-redux';
import {changeFilterStatus} from "../../redux/filterTableSlice";

const FilterTab = ({setFilterData}) => {

    // const { filterStatus } = useSelector((store) => store.filterPage);
    const { budget } = useSelector((store) => store.budgetPage);
    const dispatch = useDispatch();
    const [selectedTab, setSelectedTab] = useState(0);

    const handleChange = (event, newValue) => {
      console.log("data", event, newValue)
      setSelectedTab(newValue)
      const selectedCategory = newValue;
      console.log(selectedCategory, "selectedCategory")
      executeFilterCategory(selectedCategory);
      dispatch(changeFilterStatus(selectedCategory));
    };

    const executeFilterCategory = ( category ) => {
      console.log(category)
      if(category === "All"){
        setFilterData(budget.expenses)
      }else{
        setFilterData(budget.expenses.filter((ele) => {
          console.log("ele", ele)
         console.log(ele.category === category)
          return ele.category === category
        } ))
}
    }

    
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