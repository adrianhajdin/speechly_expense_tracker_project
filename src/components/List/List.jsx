import React, { useContext } from 'react';
import { List as MUIList, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import { Delete, MoneyOff } from '@material-ui/icons';

import { ExpenseTrackerContext } from '../../context/context';
import useStyles from './styles';

const List = ({ category }) => {
  const classes = useStyles();
  const { transactions, deleteTransaction } = useContext(ExpenseTrackerContext);

  const filteredTransactions = category ? transactions.filter((t) => t.category === category) : transactions;
  
  return (
    <MUIList dense={false} style={{ maxHeight: '200px', overflow: 'auto' }}>
      {filteredTransactions.map((transaction, i) => (
        <ListItem key={i}>
          <ListItemAvatar>
            <Avatar className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
              <MoneyOff />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={transaction.category} secondary={`$${transaction.amount} - ${transaction.date}`} />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete" onClick={() => deleteTransaction(transaction.id)}>
              <Delete />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </MUIList>
  );
};

export default List;
