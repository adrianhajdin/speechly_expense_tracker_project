import React from 'react';
import { Container, Grid } from '@material-ui/core';

import ExpenseTracker from './components/ExpenseTracker';
import DetailsCard from './components/DetailsCard';

const App = () => (
  <div>
    <Grid container spacing={0} alignItems="center" justify="center" style={{ minHeight: '100vh' }}>
      <Container maxWidth="xs">
        <DetailsCard title="Income" />
      </Container>

      <Container maxWidth="xs">
        <ExpenseTracker />
      </Container>

      <Container maxWidth="xs">
        <DetailsCard title="Expense" />
      </Container>
    </Grid>
  </div>
);

export default App;
