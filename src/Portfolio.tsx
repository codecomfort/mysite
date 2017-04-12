import MuiMenu from 'material-ui/Menu';
import MuiMenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import * as React from 'react';
import {Col, Container, Row} from 'react-grid-system';
import {Link, Route} from 'react-router-dom';
import AwsSample01 from './aws-api-sample01/Root';
import Counter from './counter/Root';
import './Portfolio.css';
import TicTacToe from './react-tutorial-tictactoe/TicTacToe';

const Portfolio = () => (
  <div className="Portfolio-area">
    <Route path="/portfolio/counter" component={ Counter }/>
    <Route path="/portfolio/react-tutorial-tictactoe" component={ TicTacToe }/>
    <Route path="/portfolio/aws-api-sample01" component={ AwsSample01 }/>
  </div>
);

export default Portfolio;
