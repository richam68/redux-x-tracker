const expenseValidation = (name, category, amount) => {
    //if name is empty or invalid character
    if(name.trim() === ''){
        return {validate: false, message: "Please enter expense name"}
    }else if (!isNaN(Number(name))) {
        return {
          validate: false,
          message: "Please enter a valid name. Numbers are not allowed.",
        };
    }
     //select any category from dropdown
     if (!category) {
        return { validate: false, message: "Please select category from drop-down" };
    }

    //if amount is empty
    if(amount === ''){
        return { validate: false, message: "Please enter amount." };
    }else if(amount <= 0){
        return { validate: false, message: "Please enter valid amount." };
    }

   

    return {validate: true, message: "Validate"}
}

export default expenseValidation;