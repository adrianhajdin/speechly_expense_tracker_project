import React, { useRef } from 'react';
import { Grid, Typography } from '@material-ui/core';

import { PushToTalkButton, PushToTalkButtonContainer  } from '@speechly/react-ui';

import { Details, InfoCard, Main } from './components';
import useStyles from './styles';
const App = () => {
  const classes = useStyles();
  const myRef = useRef(null)
  
  const executeScroll = () => myRef.current.scrollIntoView();

  return (
    <div>
      <Grid className={classes.grid} container spacing={0} alignItems="center" justify="center" style={{ minHeight: '100vh' }}>
        <Grid item xs={12} sm={4} className={classes.mobile}>
          <Details title="Income"  />
          {/* <br /> */}
          {/* <InfoCard isIncome={true} /> */}
        </Grid>
        <Grid ref={myRef} item xs={12} sm={3} className={classes.main}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.desktop}>
          <Details title="Income"  />
          {/* <br /> */}
          {/* <InfoCard isIncome={true} /> */}
        </Grid>
        <Grid item xs={12} sm={4} className={classes.last}>
          <Details title="Expense" />
          {/* <br /> */}
          {/* <InfoCard isIncome={false} /> */}
        </Grid>
        <PushToTalkButtonContainer>
    <button style={{backgroundColor: 'inherit', border: 'none'}}  onClick={executeScroll}>
    <PushToTalkButton  />
    </button>
</PushToTalkButtonContainer>
      </Grid>
    </div>
  );
};

export default App;
