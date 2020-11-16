import React, { useContext } from 'react';
import { Card, CardHeader, CardContent, CardActions, Collapse, IconButton, Typography, Grid, Divider } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons'; // attachmoney
import clsx from 'clsx';

import useStyles from './styles';
import Form from './Form/Form';
import List from '../List/List';
import { ExpenseTrackerContext } from '../../context/context';

const ExpenseTracker = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
    const { balance } = useContext(ExpenseTrackerContext);

  const handleExpandClick = () => setExpanded(!expanded);

  return (
    <Card className={classes.root}>
      <CardHeader title="Expense Tracker" subheader="Powered by Speechly" />
      <CardContent>
        <Typography align="center" variant="h5">Total Balance ${balance}</Typography>
        <Divider style={{ margin: '30px 0' }} />
        <Form />
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
              <List />
            </Grid>
          </Grid>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default ExpenseTracker;
