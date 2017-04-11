import AppBar from 'material-ui/AppBar';
// import {List, ListItem} from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import Home from './Home';
import Portfolio from './Portfolio';
import './css/font-icons.css';

const logo = require('./logo.svg');

const App = () => (
  <MuiThemeProvider>
    <Router>
      <div className="App">
        <AppBar
          className="App-bar"
          iconElementRight={
            <IconButton iconClassName="muidocs-icon-custom-github"
                        href="https://github.com/codecomfort/"
                        target="_blank"/> }
        />
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
