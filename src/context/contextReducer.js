export default (state, action) => {

    let selectedCategories;
    let category;

    let newCategories;

  switch (action.type) {
    case 'DELETE_TRANSACTION':
      // eslint-disable-next-line no-case-declarations
      const trans = state.transactions.find((transaction) => transaction.id === action.payload);

      selectedCategories = trans.type === "Income" ? state.incomeCategories : state.expenseCategories;
      category = selectedCategories.find((c) => c.type === trans.category);
      category.amount -= trans.amount;
  
      newCategories = selectedCategories.filter((c) => c.type !== trans.category)
      newCategories.push((category));

      return {
        ...state,
        transactions: state.transactions.filter((transaction) => transaction.id !== action.payload),
        income: trans.type === 'Income' ? state.income - trans.amount : state.income,
        expense: trans.type === 'Expense' ? state.expense - trans.amount : state.expense,
        incomeCategories: newCategories,  
    };
    case 'ADD_TRANSACTION':
        selectedCategories = action.payload.type === "Income" ? state.incomeCategories : state.expenseCategories;
        category = selectedCategories.find((c) => c.type === action.payload.category);
        category.amount += action.payload.amount;
    
        newCategories = selectedCategories.filter((c) => c.type !== action.payload.category)
        newCategories.push((category));
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
        income: action.payload.type === 'Income' ? state.income + action.payload.amount : state.income,
        expense: action.payload.type === 'Expense' ? state.expense + action.payload.amount : state.expense,
        incomeCategories: newCategories,
    };
    default:
      return state;
  }
};
