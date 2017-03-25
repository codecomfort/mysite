import * as React from 'react';
import {Route, Link} from 'react-router-dom';
import Counter from './counter/Root';
import TicTacToe from './react-tutorial-tictactoe/TicTacToe';
import Paper from 'material-ui/Paper';
import MuiMenu from 'material-ui/Menu';
import MuiMenuItem from 'material-ui/MenuItem';
import AwsSample01 from './aws-api-sample01/View';

const styles = {
  paperStyle: {
    display: 'inline-block',
    margin: '16px 32px 16px 0',
    textAlign: 'left', // 文字を左寄せ
    float: 'left' // メニューを左寄せ
  },
  menuStyle: {
  }
};

const Portfolio = () => (
  <div>
    <Paper style={styles.paperStyle}>
      <h2>Portfolio Page</h2>
      <MuiMenu style={styles.menuStyle}>
        <MuiMenuItem>
          <Link to="/portfolio/counter">Counter</Link>
        </MuiMenuItem>
        <MuiMenuItem>
          <Link to="/portfolio/react-tutorial-tictactoe">React Tutorial Tic Tac Toe</Link>
        </MuiMenuItem>
        <MuiMenuItem>
          <Link to="/portfolio/aws-api-sample01">AWS ApiGateway Lambda Sample</Link>
        </MuiMenuItem>
      </MuiMenu>
    </Paper>
    <Route path="/portfolio/counter" component={ Counter }/>
    <Route path="/portfolio/react-tutorial-tictactoe" component={ TicTacToe }/>
    <Route path="/portfolio/aws-api-sample01" component={ AwsSample01 }/>

  </div>
);

export default Portfolio;
