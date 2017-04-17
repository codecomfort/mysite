import * as React from 'react';
import {Col, Container, Row} from 'react-grid-system';
import {Link, Route} from 'react-router-dom';
import AwsSample01 from './aws-api-sample01/Root';
import Counter from './counter/Root';
import './Portfolio.css';
import TicTacToe from './react-tutorial-tictactoe/TicTacToe';
import ImmutableForm from './redux-form-immutable/ImmutableForm';
import MaterialUiForm from './redux-form-material-ui/MaterialUiForm';

const Portfolio = () => (
  <div className="Portfolio-area">
    <Route path="/portfolio/counter" component={ Counter }/>
    <Route path="/portfolio/react-tutorial-tictactoe" component={ TicTacToe }/>
    <Route path="/portfolio/aws-api-sample01" component={ AwsSample01 }/>
    <Route path="/portfolio/redux-form-immutable" component={ ImmutableForm }/>
    <Route path="/portfolio/redux-form-material-ui" component={ MaterialUiForm }/>
  </div>
);

export default Portfolio;
