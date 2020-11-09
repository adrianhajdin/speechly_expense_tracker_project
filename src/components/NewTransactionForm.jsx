import React, { useState } from 'react';
import { TextField, Typography } from '@material-ui/core';

const NewTransactionForm = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  return (
    <div>
      <Typography>Add new transaction</Typography>
      <TextField label="Text" value={text} onChange={(e) => setText(e.target.value)} />
      <TextField label="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
    </div>
  );
};

export default NewTransactionForm;
