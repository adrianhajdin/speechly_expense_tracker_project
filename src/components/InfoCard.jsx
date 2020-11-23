import React from 'react';
import { Paper, Typography, Chip } from '@material-ui/core';

const InfoCard = ({ isIncome }) => {
    const backgroundColor = isIncome ? 'rgba(0, 255, 0, 0.5)' : 'rgba(255, 0, 0, 0.5)';

    return (
        <Paper elevation={3} style={{ padding: 20, textAlign: 'center' }}>
            <Typography variant="h5" style={{ lineHeight: '2em' }}>
                Try saying: "Add 
                &nbsp;<Chip label={isIncome ? "Income" : "Expense"} style={{ backgroundColor }}  />&nbsp;
                for 
                &nbsp;<Chip label={ isIncome ? "$100" : "$50"} style={{ backgroundColor }}  />&nbsp;
                in Category 
                &nbsp;<Chip label={ isIncome ? "Salary" : "Travel"} style={{ backgroundColor }}  />&nbsp; 
                for 
                &nbsp;<Chip label={ isIncome ? "Next Monday" : "Next Thursday"} style={{ backgroundColor }}   />"&nbsp;
            </Typography>
        </Paper>
    )
}

export default InfoCard
