import React from 'react';
import { Grid } from '@material-ui/core';

import { Details, Main } from './components';
import useStyles from './styles';
import { useSpeechContext } from '@speechly/react-client'

const App = () => {
    const classes = useStyles();
    const { speechState, segment, toggleRecording } = useSpeechContext()

//     In App.tsx (or similar):
// import { PushToTalkButton, PushToTalkButtonContainer } from "speechly-react-ui";
//         <PushToTalkButtonContainer>
//           <PushToTalkButton captureKey=" " />
//         </PushToTalkButtonContainer>

    return (
        <div>
            <Grid className={classes.grid} container spacing={0} alignItems="center" justify="center" style={{ minHeight: '100vh' }}>
                <Grid item xs={4} className={classes.mobile}>
                    <Details title="Income" />
                </Grid>
                <Grid item xs={3} className={classes.main}>
                    <Main />
                </Grid>
                <Grid item xs={4} className={classes.desktop}>
                    <Details title="Income" />
                </Grid>
                <Grid item xs={4} className={classes.last}>
                    <Details title="Expense" />
                </Grid>
                <div className="status">{speechState}</div>
                {segment ? <div className="segment">{segment.words.map(w => w.value).join(' ')}</div> : null}
                <div className="mic-button">
                    <button onClick={toggleRecording}>Record</button>
                </div>
            </Grid>
        </div>
    );
}

export default App;
