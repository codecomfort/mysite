import * as React from 'react';
import './App.css';
import Home from './Home';
import Portfolio from './Portfolio';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
const logo = require('./logo.svg');
const styles = {
  flexContainer: {
    display: 'flex',
    flexDirection: 'row', // 横並びにする
  },
  linkInMenu: { // トップメニュー内のリンクのスタイル
    textDecoration: 'none'  // 下線を消す
  }
};

const App = () => (
  <MuiThemeProvider>
    <Router>
      <div className="App">
        <AppBar
          title="CodeComfort"
        >
          <List style={styles.flexContainer}>
            <ListItem>
              <Link to="/" style={styles.linkInMenu}>Home</Link>
            </ListItem>
            <ListItem>
              <Link to="/portfolio" style={styles.linkInMenu}>Portfolio</Link>
            </ListItem>
            <ListItem primaryText="About"/>
          </List>
        </AppBar>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Welcome to CodeComfort Web Site!!!</h2>
        </div>
        <Route exact path="/" component={ Home }/>
        <Route path="/portfolio" component={ Portfolio }/>
      </div>
    </Router>
  </MuiThemeProvider>
);

export default App;
