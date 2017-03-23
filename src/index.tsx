import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import store from './Store';    // default export に store と命名
import {Provider} from 'react-redux';
const injectTapEventPlugin = require('react-tap-event-plugin');
injectTapEventPlugin();

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
