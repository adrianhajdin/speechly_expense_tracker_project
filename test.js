// const { AccordionActions } = require("@material-ui/core")

// const examplePayload = {
//     title: 'Dog food', 
//     type: 'Expense', 
//     amount: 50, 
//     category: 'Pets', 
//     id: 123123,
// }

// // { type: category, amount: 0, color: generateRandomColor() }

// const addTransaction = (state, action) => {
//   if(action.payload.type === 'Income') {
//       const totalIncome = state.totalIncome += action.payload.amount;
//       const category = incomeCategories.find((iC) => iC.type === action.payload.category);
//       category.amount += action.payload.amount;
//   } else if(action.payload.type === 'Expense') {
//     const totalExpense = state.totalExpense += action.payload.amount;
//     const category = expenseCategories.find((eC) => eC.type === action.payload.category);
//     category.amount += action.payload.amount;
//   }

//   const newTransactions = [...state.transactions, action.payload]
// }
