import React from 'react';
import ReactDOM from 'react-dom';
// import { PushToTalkButton, PushToTalkContainer } from "@speechly/react-ui";
import { SpeechProvider } from '@speechly/react-client';

import App from './App';
import './index.css';

import { Provider } from './context/context';

ReactDOM.render(
  <SpeechProvider appId="7c4aee08-1073-4a32-b862-ebe1850e0732" language="en-US">
    {/* <PushToTalkContainer>
      <PushToTalkButton captureKey=" " />
    </PushToTalkContainer> */}
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById('root'),
);
