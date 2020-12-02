import React from 'react';
import { Paper, Typography, Chip } from '@material-ui/core';
const isIncome = Math.round(Math.random());

const InfoCard = () => {
    const backgroundColor = isIncome ? 'rgba(0, 255, 0, 0.5)' : 'rgba(255, 0, 0, 0.5)';

    return (
        <div elevation={3} style={{  textAlign: 'center' }}>
                Try saying: <br /> "Add 
                &nbsp;<Chip label={isIncome ? "Income" : "Expense"} style={{ backgroundColor }}  />&nbsp;
                for 
                &nbsp;<Chip label={ isIncome ? "$100" : "$50"} style={{ backgroundColor }}  />&nbsp;
                in Category 
                &nbsp;<Chip label={ isIncome ? "Salary" : "Travel"} style={{ backgroundColor }}  />&nbsp; 
                for 
                &nbsp;<Chip label={ isIncome ? "Monday" : "Thursday"} style={{ backgroundColor }}   />"&nbsp;
        </div>
    )
}

export default InfoCard
