import React, { useContext } from 'react';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Doughnut } from 'react-chartjs-2';

import { ExpenseTrackerContext } from '../context/context';

const useStyles = makeStyles(() => ({
  income: {
    borderBottom: '10px solid rgba(0, 255, 0, 0.5)',
  },
  expense: {
    borderBottom: '10px solid rgba(255, 0, 0, 0.5)',
  },
}));

const DetailsCard = ({ title, subheader }) => {
  const classes = useStyles();
  const { state: { income, expense, transactions} , incomeCategories, expenseCategories } = useContext(ExpenseTrackerContext);

//   const selectedCategories = title === "Income" ? incomeCategories : expenseCategories;

//       transactions.forEach((t) => {  
//         const currentCategory = selectedCategories.find((c) => c.type === t.category);

//         console.log(currentCategory);

//         if(currentCategory) {
//             currentCategory.amount += t.amount;
//         }
//       });

//       console.log(transactions);
//       console.log(selectedCategories)

//   const filteredSelectedCategory = selectedCategories.filter((sc) => sc.amount > 0);
const filteredSelectedCategory = incomeCategories.filter((sc) => sc.amount > 0);

  const data = {
    datasets: [{
      data: filteredSelectedCategory.map((c) => c.amount),
      backgroundColor: filteredSelectedCategory.map((c) => c.color),
    }],
    labels: filteredSelectedCategory.map((c) => c.type),
  };

  return (
    <Card className={title === 'Income' ? classes.income : classes.expense}>
      <CardHeader title={title} subheader={subheader} />
      <CardContent>
        <Typography variant="h5">${title === 'Income' ? income : expense}</Typography>
        {/* <NewTransactionForm /> */}
        <Doughnut data={data} />
      </CardContent>
    </Card>
  );
};
export default DetailsCard;
