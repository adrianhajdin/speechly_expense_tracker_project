import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css';

import { Provider } from './context/context';

import { SpeechProvider } from '@speechly/react-client'

ReactDOM.render(
    <SpeechProvider appId="7c4aee08-1073-4a32-b862-ebe1850e0732" language="en-US">
        <Provider>
            <App />
        </Provider>
    </SpeechProvider>,
  document.getElementById('root'),
);
