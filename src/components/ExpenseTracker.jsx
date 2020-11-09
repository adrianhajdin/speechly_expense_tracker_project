import React from 'react';
import { Card, CardHeader, CardContent, CardActions, Collapse, IconButton, Typography } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import clsx from 'clsx';

import NewTransactionForm from './NewTransactionForm';

const useStyles = makeStyles((theme) => ({
//   root: {
//     maxWidth: 345,
//   },
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
  avatar: {
    backgroundColor: red[500],
  },
}));

const ExpenseTracker = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader title="Expense Tracker" subheader="Powered by Speechly" />
      <CardContent>
        <Typography variant="body1" component="h2">Current Balance - $0.00</Typography>
        <div>
          <Typography>Income $0.00</Typography>
          <Typography>Expense $0.00</Typography>
        </div>
        <NewTransactionForm />
      </CardContent>
      <CardActions disableSpacing>
        <IconButton className={clsx(classes.expand, { [classes.expandOpen]: expanded })} onClick={handleExpandClick} aria-expanded={expanded}>
          <ExpandMore />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>List:</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default ExpenseTracker;
