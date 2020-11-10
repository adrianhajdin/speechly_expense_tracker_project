import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import { red } from '@material-ui/core/colors';
import { Doughnut } from 'react-chartjs-2';
// import NewTransactionForm from './NewTransactionForm';

const useStyles = makeStyles(() => ({
  income: {
    borderBottom: '10px solid rgba(0, 255, 0, 0.5)',
  },
  expense: {
    borderBottom: '10px solid rgba(255, 0, 0, 0.5)',
  },
}));

const data = {
  datasets: [{
    data: [10, 20, 30],
    backgroundColor: ['#ff6384', '#ffcd55', '#36a2eb'],
  }],

  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: [
    'Red',
    'Yellow',
    'Blue',
  ],
};

// // For a pie chart
// const myPieChart = new Chart(ctx, {
//   type: 'pie',
//   data,
//   options: Chart.defaults.doughnut,
// });
// // And for a doughnut chart
// const myDoughnutChart = new Chart(ctx, {
//   type: 'doughnut',
//   data,
//   options: Chart.defaults.pie,
// });

const DetailsCard = ({ title, subheader }) => {
  const classes = useStyles();
  // <Card className={classes.root}>
  return (
    <Card className={title === 'Income' ? classes.income : classes.expense}>
      <CardHeader title={title} subheader={subheader} />
      <CardContent>
        <Typography variant="h5">$0.00</Typography>
        {/* <NewTransactionForm /> */}
        <Doughnut data={data} />
      </CardContent>
    </Card>
  );
};
export default DetailsCard;
