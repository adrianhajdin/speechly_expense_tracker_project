import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css';

import { Provider } from './context/context';

import { SpeechProvider } from '@speechly/react-client'

ReactDOM.render(
  <Provider>
        <SpeechProvider appId="7c4aee08-1073-4a32-b862-ebe1850e0732" language="en-US">
            <App />
        </SpeechProvider>
  </Provider>,
  document.getElementById('root'),
);
