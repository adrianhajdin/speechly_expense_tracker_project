import React from 'react';
import { Container, Grid } from '@material-ui/core';

import { Details, Main } from './components';
import useStyles from './styles';


const App = () => {
    const classes = useStyles();
    return (
  <div>
    <Grid className={classes.grid} container spacing={0} alignItems="center" justify="center" style={{ minHeight: '100vh' }}>
    <Container maxWidth="sm" className={classes.mobile}>
        <Details title="Income" />
      </Container>
      <Container maxWidth="xs" className={classes.main}>
        <Main />
      </Container>
      <Container maxWidth="sm" className={classes.desktop}>
        <Details title="Income" />
      </Container>
      <Container maxWidth="sm" className={classes.last}>
        <Details title="Expense" />
      </Container>
    </Grid>
  </div>
)
}

export default App;
