import React, { useState, useContext, useEffect } from 'react';
import { TextField, Typography, Grid, Button, RadioGroup, FormControlLabel, Radio, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';

import { useSpeechContext } from '@speechly/react-client';
import Snackbar from '../../Snackbar/Snackbar';
import formatDate from '../../../utils/formatDate';
import { ExpenseTrackerContext } from '../../../context/context';
import { incomeCategories, expenseCategories } from '../../../constants/categories';
import useStyles from './styles';

const initialState = {
  amount: '',
  category: '',
  type: 'Income',
  date: formatDate(new Date()),
};

const NewTransactionForm = () => {
  const classes = useStyles();
  const { addTransaction } = useContext(ExpenseTrackerContext);
  const [formData, setFormData] = useState(initialState);
  const { segment } = useSpeechContext();
  const [open, setOpen] = React.useState(false);

  const createTransaction = () => {
    if(isNaN(Number(formData.amount)) || !formData.date.includes('-')) return;
      
    setOpen(true);
    addTransaction({ ...formData, amount: Number(formData.amount), id: uuidv4() });
    setFormData(initialState);
  };

  useEffect(() => {
    if (segment) {
      if (segment.intent.intent === 'add_expense') {
        setFormData({ ...formData, type: 'Expense' });
      } else if (segment.intent.intent === 'add_income') {
        setFormData({ ...formData, type: 'Income' });
      } else if (segment.isFinal && segment.intent.intent === 'create_transaction') {
        return createTransaction();
      } else if (segment.isFinal && segment.intent.intent === 'cancel_transaction') {
        return setFormData(initialState);
      }

      segment.entities.forEach((s) => {
        switch (s.type) {
          case 'amount':
            setFormData({ ...formData, amount: s.value });
            break;
          case 'category':
            setFormData({ ...formData, category: `${s.value.charAt(0)}${s.value.slice(1).toLowerCase()}` });
            break;
          case 'date':
            setFormData({ ...formData, date: s.value });
            break;
          default:
            break;
        }
      });
      
      if(segment.isFinal && formData.amount && formData.category && formData.type && formData.date) {
          createTransaction()
      }
    }
  }, [segment]);


  const selectedCategories = formData.type === 'Income' ? incomeCategories : expenseCategories;

  return (
    <Grid>
      <Snackbar open={open} setOpen={setOpen} />
      <Typography align="center" variant="h5" gutterBottom>Add new transaction</Typography>
      <RadioGroup className={classes.radioGroup} value={formData.type} row onChange={(e) => setFormData({ ...formData, type: e.target.value, category: '' })}>
        <FormControlLabel value="Income" control={<Radio color="primary" />} label="Income" />
        <FormControlLabel value="Expense" control={<Radio color="secondary" />} label="Expense" />
      </RadioGroup>
      <FormControl fullWidth>
        <InputLabel>Category</InputLabel>
        <Select value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })}>
          {selectedCategories.map((c) => <MenuItem key={c.type} value={c.type}>{c.type}</MenuItem>)}
        </Select>
      </FormControl>
      <TextField type="number" label="Amount" value={formData.amount} onChange={(e) => setFormData({ ...formData, amount: e.target.value })} fullWidth />
      <TextField className={classes.textField} fullWidth label="Date" type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: formatDate(e.target.value) })} />
      <Button variant="outlined" color="primary" fullWidth onClick={createTransaction}>Create</Button>
    </Grid>
  );
};

export default NewTransactionForm;
