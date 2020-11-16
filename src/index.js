import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css';

import { Provider } from './context/context';

import { SpeechProvider } from '@speechly/react-client'

ReactDOM.render(
  <Provider>
        <SpeechProvider appId="9b2b830b-8d01-4207-96ff-b86537a21bb8" language="en-US">
            <App />
        </SpeechProvider>
  </Provider>,
  document.getElementById('root'),
);
