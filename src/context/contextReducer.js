export default (state, action) => {
  let transactions;

  switch (action.type) {
    case 'DELETE_TRANSACTION':
      transactions = state.filter((transaction) => transaction.id !== action.payload);

      localStorage.setItem('transactions', JSON.stringify(transactions));

      return transactions;
    case 'ADD_TRANSACTION':
      transactions = [...state, action.payload];

      localStorage.setItem('transactions', JSON.stringify(transactions));

      return transactions;
    default:
      return state;
  }
};
