import React, { useReducer, createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

import contextReducer from './contextReducer';

const generateRandomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const expenseCategories = [
  { type: 'Bills', amount: 0, color: generateRandomColor() },
  { type: 'Car', amount: 0, color: generateRandomColor() },
  { type: 'Clothes', amount: 0, color: generateRandomColor() },
  { type: 'Travel', amount: 0, color: generateRandomColor() },
  { type: 'Food', amount: 0, color: generateRandomColor() },
  { type: 'Shopping', amount: 0, color: generateRandomColor() },
  { type: 'House', amount: 0, color: generateRandomColor() },
  { type: 'Entertainment', amount: 0, color: generateRandomColor() },
  { type: 'Phone', amount: 0, color: generateRandomColor() },
  { type: 'Pets', amount: 0, color: generateRandomColor() },
  { type: 'Other', amount: 0, color: generateRandomColor() },
];

const incomeCategories = [
    { type: 'Business', amount: 0, color: generateRandomColor() },
    { type: 'Investments', amount: 0, color: generateRandomColor() },
    { type: 'Extra income', amount: 0, color: generateRandomColor() },
    { type: 'Deposits', amount: 0, color: generateRandomColor() },
    { type: 'Lottery', amount: 0, color: generateRandomColor() },
    { type: 'Gifts', amount: 0, color: generateRandomColor() },
    { type: 'Salary', amount: 0, color: generateRandomColor() },
    { type: 'Savings', amount: 0, color: generateRandomColor() },
    { type: 'Rental income', amount: 0, color: generateRandomColor() },
];

const initialState = {
  transactions: [],
  incomeCategories,
  expenseCategories,
  income: 0,
  expense: 0,
}

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(contextReducer, initialState);

  const deleteTransaction = (id) => {
    dispatch({ type: 'DELETE_TRANSACTION', payload: id });
  };

  const addTransaction = (transaction) => {
    dispatch({ type: 'ADD_TRANSACTION', payload: transaction });
  };

  return (
    <ExpenseTrackerContext.Provider value={{ state, 
        expenseCategories,
        incomeCategories,
        deleteTransaction, 
        addTransaction }}>
      {children}
    </ExpenseTrackerContext.Provider>
  );
};