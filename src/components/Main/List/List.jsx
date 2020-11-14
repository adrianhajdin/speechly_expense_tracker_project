import React, { useContext } from 'react';
import { List as MUIList, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import { Delete, MoneyOff } from '@material-ui/icons';

import { ExpenseTrackerContext } from '../../../context/context';
import useStyles from './styles';

const List = () => {
  const classes = useStyles();
  const { transactions, deleteTransaction } = useContext(ExpenseTrackerContext);

  return (
    <MUIList dense={false} style={{ maxHeight: '200px', overflow: 'auto' }}>
      {transactions.map((transaction, i) => (
        <ListItem key={i}>
          <ListItemAvatar>
            <Avatar className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
              <MoneyOff />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={`${transaction.title} - ${transaction.category}`} secondary={transaction.amount} />
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
