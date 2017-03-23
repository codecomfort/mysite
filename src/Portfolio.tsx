import * as React from 'react';
import {Route, Link} from 'react-router-dom';
import Counter from './counter/Root';
import TicTacToe from './react-tutorial-tictactoe/TicTacToe';

const Portfolio = () => (
  <div>
    <h2>Portfolio Page</h2>
    <ul>
      <li><Link to="/portfolio/counter">Counter</Link></li>
      <li><Link to="/portfolio/react-tutorial-tictactoe">React Tutorial Tic Tac Toe</Link></li>
      <li><Link to="/">Home</Link></li>
    </ul>

    <Route path="/portfolio/counter" component={ Counter }/>
    <Route path="/portfolio/react-tutorial-tictactoe" component={ TicTacToe }/>
  </div>
);

export default Portfolio;
