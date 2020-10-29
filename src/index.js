import 'promise-polyfill/src/polyfill';
import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import './assets/main.css';
import App from './App';
import { objectAssignPolyfill } from './helpers/polyfills';

objectAssignPolyfill();

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
