const validation = (name, totalBudget, category) => {
  // Check if the name is not empty and not a number
  let letters = /^[a-zA-Z ]*$/;
  if (name.trim() === "") {
    return { validate: false, message: "Please enter a name." };
  } else if (!isNaN(Number(name))) {
    return {
      validate: false,
      message: "Please enter a valid name. Numbers are not allowed.",
    };
  } else if (!name.match(letters)) {
    return {
      validate: false,
      message: "Please enter a valid name. Alpha-Numerics are not allowed.",
    };
  }

  //Check if total budget is not empty and greater than zero
  if (totalBudget === "") {
    return { validate: false, message: "Please enter total budget amount." };
  } else if (totalBudget <= 0) {
    return {
      validate: false,
      message:
        "Total budget should be greater than 0. Please enter a valid amount.",
    };
  }

  // Check if any category field is empty
  for (let key of Object.keys(category)) {
    if (
      category[key] === "" ||
      isNaN(category[key] < 0) ||
      category[key] <= 0
    ) {
      return { validate: false, message: "Please fill the expense input box" };
    }
  }

  //The sum of all the category-wise budget must add up to the total budget mentioned. If it is < total budget, the remaining amount must be added to the Others category.

  const { food, travel, utilities } = category;
  let categoryWiseBudget = food + travel + utilities;
  // console.log(
  //   "Total of specified categories (excluding others):",
  //   categoryWiseBudget
  // );

  // if (categoryWiseBudget < totalBudget) {
  //   category.others = totalBudget - categoryWiseBudget;

  // } else
  if (categoryWiseBudget > totalBudget) {
    return {
      validate: false,
      message: "Total Categorical budget should not exceed monthly budget",
    };
  }
  // console.log("Adjusted category:", category);

  return { validate: true, message: "Validate" };
};

export default validation;
