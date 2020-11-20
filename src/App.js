import React from 'react';
import { Grid } from '@material-ui/core';

import { PushToTalkButton, PushToTalkContainer, BigTransscript, BigTransscriptContainer } from './speechly-react-ui';

import { Details, Main } from './components';
import useStyles from './styles';

const App = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid className={classes.grid} container spacing={0} alignItems="center" justify="center" style={{ minHeight: '100vh' }}>
        <Grid item xs={12} sm={4} className={classes.mobile}>
          <Details title="Income" subheader='Try saying: "Add Income for $50 in Category Salary for Next Monday"' />
        </Grid>
        <Grid item xs={12} sm={3} className={classes.main}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.desktop}>
          <Details title="Income" subheader='Try saying: "Add Income for $50 in Category Salary for Next Monday"' />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.last}>
          <Details title="Expense" subheader='Try saying: "Add Expense for $25 in Category Pets for Tomorrow"' />
        </Grid>
        <PushToTalkContainer>
          <PushToTalkButton />
        </PushToTalkContainer>
        <BigTransscriptContainer>
          <BigTransscript />
        </BigTransscriptContainer>
      </Grid>
    </div>
  );
};

export default App;
