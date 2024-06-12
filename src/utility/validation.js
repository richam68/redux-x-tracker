const validation = (name, totalBudget, category ) => {

  //The total budget must be > 0.
  if (totalBudget < 0) {
    return {'validate' : false, "message": "Please enter a valid amount"}
  }

  //None of the fields must be empty
  if (name === "" || totalBudget === "") {
   return {'validate' : false, "message": "Please enter a valid amount"}
   
  }

  // Check if any category field is empty
  for (let key in category) {
    if (category[key] === "" || category[key] < 0) {
     return {'validate' : false, "message": "Please enter a valid amount"}
    }
  }

  //The sum of all the category-wise budget must add up to the total budget mentioned. If it is < total budget, the remaining amount must be added to the Others category.
  let categoryWiseSum = Object.values(category).reduce(
    (total, curr) => total + curr,
    0
  );

  if (categoryWiseSum < totalBudget) {
    category.others += totalBudget - categoryWiseSum;
  } else if (categoryWiseSum > totalBudget) {
    return {'validate' : false, "message": "Please enter a valid amount"}
  }

  return {'validate': true, "message": "Validate"}
};

export default validation;
