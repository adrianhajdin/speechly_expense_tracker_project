import React, { useContext } from 'react';
import { Card, CardHeader, CardContent, CardActions, Collapse, IconButton, Typography, Grid, List, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, Divider } from '@material-ui/core';
import { ExpandMore, Delete, MoneyOff } from '@material-ui/icons'; // attachmoney
import clsx from 'clsx';

import useStyles from './styles';
import NewTransactionForm from '../Form/Form';
import { ExpenseTrackerContext } from '../../context/context';

const ExpenseTracker = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const { transactions, deleteTransaction } = useContext(ExpenseTrackerContext);

  const handleExpandClick = () => setExpanded(!expanded);

  return (
    <Card className={classes.root}>
      <CardHeader title="Expense Tracker" subheader="Powered by Speechly" />
      <CardContent>
        <Typography align="center" variant="h5">Total Balance - $0</Typography>
        <Divider style={{margin: '30px 0'}} />
        <NewTransactionForm />
      </CardContent>
      <CardActions disableSpacing>
        <IconButton className={clsx(classes.expand, { [classes.expandOpen]: expanded })} onClick={handleExpandClick} aria-expanded={expanded}>
          <ExpandMore />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent className={classes.cartContent}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h6" className={classes.title}>Transaction History</Typography>
              <List dense={false}>
                {transactions.map((transaction, i) => (
                  <ListItem key={i}>
                    <ListItemAvatar>
                      <Avatar className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                        <MoneyOff />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={transaction.title} secondary={transaction.amount} />
                    <ListItemSecondaryAction>
                      <IconButton edge="end" aria-label="delete" onClick={() => deleteTransaction(transaction.id)}>
                        <Delete />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default ExpenseTracker;
