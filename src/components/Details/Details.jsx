import React, { useContext } from 'react';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';

import useStyles from './styles';
import useTransactions from '../../useTransactions';
import { ExpenseTrackerContext } from '../../context/context';
import { incomeCategories, expenseCategories } from '../../constants/categories';

const DetailsCard = ({ title, subheader }) => {
    const classes = useStyles();
    const { total, chartData } = useTransactions(title);

  return (
    <Card className={title === 'Income' ? classes.income : classes.expense}>
      <CardHeader title={title} subheader={subheader} />
      <CardContent>
        <Typography variant="h5">${total}</Typography>
        <Doughnut data={chartData} />
      </CardContent>
    </Card>
  );
};
export default DetailsCard;
