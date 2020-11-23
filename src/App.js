import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import { PushToTalkButton, PushToTalkContainer, BigTransscript, BigTransscriptContainer } from './speechly-react-ui';

import { Details, InfoCard, Main } from './components';
import useStyles from './styles';

const App = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid className={classes.grid} container spacing={0} alignItems="center" justify="center" style={{ minHeight: '100vh' }}>
        <Grid item xs={12} sm={4} className={classes.mobile}>
          <Details title="Income"  />
          <br />
          <InfoCard isIncome={true} />
        </Grid>
        <Grid item xs={12} sm={3} className={classes.main}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.desktop}>
          <Details title="Income"  />
          <br />
          <InfoCard isIncome={true} />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.last}>
          <Details title="Expense" />
          <br />
          <InfoCard isIncome={false} />
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
