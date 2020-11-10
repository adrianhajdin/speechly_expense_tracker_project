import React, { useState } from 'react';
import { TextField, Typography, Grid } from '@material-ui/core';

const NewTransactionForm = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  return (
    <Grid direction="column">
      <Typography variant="subtitle1">Add new transaction</Typography>
      <TextField label="Text" value={text} onChange={(e) => setText(e.target.value)} fullWidth />
      <TextField label="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} fullWidth margin="normal" />
    </Grid>
  );
};

export default NewTransactionForm;
