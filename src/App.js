import React from 'react';
import { Container, Grid } from '@material-ui/core';

import { Details, Main } from './components';

const App = () => (
  <div>
    <Grid container spacing={0} alignItems="center" justify="center" style={{ minHeight: '100vh' }}>
      <Container maxWidth="sm">
        <Details title="Income" />
      </Container>
      <Container maxWidth="xs">
        <Main />
      </Container>
      <Container maxWidth="sm">
        <Details title="Expense" />
      </Container>
    </Grid>
  </div>
);

export default App;
