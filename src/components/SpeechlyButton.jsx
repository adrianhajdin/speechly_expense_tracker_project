import React from 'react'
import { useSpeechContext } from '@speechly/react-client'
import { Button, Typography, Container, IconButton } from '@material-ui/core';

import { Mic, MicOff } from '@material-ui/icons';

const SpeechlyButton = () => {
    const { speechState, segment, toggleRecording } = useSpeechContext();
    
    return (
        <Container style={{ display: 'flex', alignItems: 'center', flexDirection: "column", justifyContent: 'center'}}>
            {segment ? (
                <Typography variant="subtitle1" color="primary" gutterBottom>
                {segment.words.map(w => w.value).join(' ')}
              </Typography>
            )
            : null
            }
            {/* <IconButton onClick={toggleRecording}> */}
            {speechState === 'Recording' 
                ? (
                    <>
                    <Button variant="contained" color="secondary" onClick={toggleRecording}>Stop Speechly &nbsp;<MicOff /> </Button>
                {/* <MicOff />
                <span>Stop Speechly</span> */}
                </>
                 ) : (
                <>
                 <Button variant="contained"  color="primary" onClick={toggleRecording}>Start Speechly &nbsp;<Mic /></Button>

                 {/* <Mic />
                 <span>Start Speechly</span> */}
                 </>
                 )}
            {/* </IconButton> */}
        </Container>
    )
}

export default SpeechlyButton
