import React, { useContext } from 'react';
import { Card, CardHeader, CardContent, CardActions, Collapse, IconButton, Typography, Grid, List, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, Divider } from '@material-ui/core';
import { ExpandMore, Delete, MoneyOff } from '@material-ui/icons'; // attachmoney
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { red, green } from '@material-ui/core/colors';
import NewTransactionForm from './NewTransactionForm';
import { ExpenseTrackerContext } from '../context/context';

const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatarIncome: {
    color: '#fff',
    backgroundColor: green[500],
  },
  avatarExpense: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
  },
  cartContent: {
    paddingTop: 0,
  },
}));

const ExpenseTracker = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const { state: { transactions, income, expense }, deleteTransaction } = useContext(ExpenseTrackerContext);

  const handleExpandClick = () => setExpanded(!expanded);

  return (
    <Card className={classes.root}>
      <CardHeader title="Expense Tracker" subheader="Powered by Speechly" />
      <CardContent>
        <Typography align="center" variant="h5">Total Balance - ${income - expense}</Typography>
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
