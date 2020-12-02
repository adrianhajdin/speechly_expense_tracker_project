import React, { useState, useEffect, useContext } from 'react';
import { Card, CardHeader, CardContent, CardActions, Collapse, IconButton, Typography, Grid, Divider } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import clsx from 'clsx';

import { ExpenseTrackerContext } from '../../context/context';
import useStyles from './styles';
import Form from './Form/Form';
import List from './List/List';
import {  BigTransscript } from '../../speechly-react-ui';
import InfoCard from '../InfoCard';
import { useSpeechContext } from '@speechly/react-client';


const ExpenseTracker = () => {
  const classes = useStyles();
  const { balance } = useContext(ExpenseTrackerContext);
  const { segment } = useSpeechContext();
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    let timer;

    console.log(segment, isSpeaking)

    if(segment) {
      if(!segment?.isFinal) {
        setIsSpeaking(true);
      }
      
      if(segment?.isFinal) {
        timer = setTimeout(() => {
          setIsSpeaking(false);
        }, 3000);
      }
    }
    return () => clearTimeout(timer);
  }, [segment]);

  return (
    <Card className={classes.root}>
      <CardHeader title="Expense Tracker" subheader="Powered by Speechly" />
      <CardContent>
        <Typography align="center" variant="h5">Total Balance ${balance}</Typography>
        <Typography variant="subtitle1" style={{ lineHeight: '2.5em', marginTop: '20px' }}>
        { isSpeaking ? <BigTransscript /> : <InfoCard /> }

</Typography>

        <Divider className={classes.divider} />
        <Form />
      </CardContent>
        <CardContent className={classes.cartContent}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <List />
            </Grid>
          </Grid>
        </CardContent>
    </Card>
  );
};

export default ExpenseTracker;
