import React, { useState, useContext, useEffect } from 'react';
import { TextField, Typography, Grid, Button, RadioGroup, FormControlLabel, Radio, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';

import { ExpenseTrackerContext } from '../../../context/context';
// import useStyles from './styles';
import { incomeCategories, expenseCategories } from '../../../constants/categories';
import { useSpeechContext } from '@speechly/react-client';
import formatDate from '../../../utils/formatDate';
const initialState = {
    amount: '',
    category: '',
    type: 'Income',
    date: formatDate(new Date),
}

const NewTransactionForm = () => {
//   const classes = useStyles();
  const { addTransaction } = useContext(ExpenseTrackerContext);
  const [formData, setFormData] = useState(initialState);
  const { segment } = useSpeechContext()

  useEffect(() => {
    if(segment) {
        if(segment.intent.intent === "add_expense") {
            setFormData({...formData, type: 'Expense'});
        } else if(segment.intent.intent === "add_income") {
            setFormData({...formData, type: 'Income'});
        }
        
        segment.entities.forEach((s) => {
            switch (s.type) {
                case 'amount':
                    setFormData({...formData, amount: s.value });
                    break;
                    case 'category_expense':
                        console.log(`${s.value.charAt(0)}${s.value.slice(1).toLowerCase()}` )
                    setFormData({...formData, category: `${s.value.charAt(0)}${s.value.slice(1).toLowerCase()}` });
                    break;
                case 'category_income':
                    setFormData({...formData, category: `${s.value.charAt(0)}${s.value.slice(1).toLowerCase()}` });
                    break;
                case 'date':
                    setFormData({...formData, date: s.value });
                    break;
                default:
                    break;
            }
        })

        if(segment.isFinal && formData.category && formData.amount) {
            createTransaction();
        }
    }
  }, [segment]);

  const createTransaction = () => {
    addTransaction({ ...formData, amount: Number(formData.amount), id: uuidv4()  });

    setFormData(initialState);
  };

  const selectedCategories = formData.type === 'Income' ? incomeCategories : expenseCategories;

  return (
    <Grid>
      <Typography align="center" variant="h5" gutterBottom>Add new transaction</Typography>
      <RadioGroup style={{ display: 'flex', justifyContent: 'center', marginBottom: '-10px' }} value={formData.type} row onChange={(e) => setFormData({ ...formData, type: e.target.value, category: '' })}>
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
      <TextField fullWidth label="Date" type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: formatDate(e.target.value) })} style={{ marginTop: '10px', marginBottom: '20px' }}/>
      <Button variant="outlined" color="primary" fullWidth onClick={createTransaction}>Add</Button>
    </Grid>
  );
};

export default NewTransactionForm;
