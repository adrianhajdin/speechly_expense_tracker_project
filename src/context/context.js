import React, { useReducer, createContext } from 'react';

import contextReducer from './contextReducer';

export const ExpenseTrackerContext = createContext([]);

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, []);

  const deleteTransaction = (id) => {
    dispatch({ type: 'DELETE_TRANSACTION', payload: id });
  };

  const addTransaction = (transaction) => {
    dispatch({ type: 'ADD_TRANSACTION', payload: transaction });
  };

  return (
    <ExpenseTrackerContext.Provider value={{ 
        transactions,
      deleteTransaction,
      addTransaction }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};
