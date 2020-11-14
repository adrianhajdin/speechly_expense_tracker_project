import React, { useState, useContext } from 'react';
import { TextField, Typography, Grid, Button, RadioGroup, FormControlLabel, Radio, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';

import { ExpenseTrackerContext } from '../../../context/context';
// import useStyles from './styles';
import { incomeCategories, expenseCategories } from '../../../constants/categories';

const NewTransactionForm = () => {
//   const classes = useStyles();

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [type, setType] = useState('Income');
  const { addTransaction } = useContext(ExpenseTrackerContext);
  const createTransaction = () => {
    const transaction = { title, type, amount: Number(amount), category, id: uuidv4() };
    addTransaction(transaction);

    setTitle('');
    setAmount('');
    setCategory('');
  };

  const handleChangeType = (e) => {
    setType(e.target.value);
    setCategory('');
  };

  const selectedCategories = type === 'Income' ? incomeCategories : expenseCategories;

  return (
    <Grid>
      <Typography align="center" variant="h5" gutterBottom>Add new transaction</Typography>
      <RadioGroup style={{ display: 'flex', justifyContent: 'center', marginBottom: '-10px' }} row defaultValue="Income" onChange={handleChangeType}>
        <FormControlLabel value="Income" control={<Radio color="primary" />} label="Income" />
        <FormControlLabel value="Expense" control={<Radio color="secondary" />} label="Expense" />
      </RadioGroup>
      <TextField label="Title" value={title} onChange={(e) => setTitle(e.target.value)} fullWidth />
      <FormControl fullWidth>
        <InputLabel>Category</InputLabel>
        <Select value={category} onChange={(e) => setCategory(e.target.value)}>
          {selectedCategories.map((c) => <MenuItem key={c.type} value={c.type}>{c.type}</MenuItem>)}
        </Select>
      </FormControl>
      <TextField style={{ marginBottom: '20px' }} type="number" label="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} fullWidth />
      <Button variant="outlined" color="primary" fullWidth onClick={createTransaction}>Add</Button>
    </Grid>
  );
};

export default NewTransactionForm;
