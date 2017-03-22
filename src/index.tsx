import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import store from './Store';    // default export に store と命名
import { Provider } from 'react-redux';
import Counter from './counter/Root';   // default export(の戻り値)に Counter と命名

ReactDOM.render(
  <Provider store={ store }>
      <Counter />
  </Provider>,
  document.getElementById('root')
);
