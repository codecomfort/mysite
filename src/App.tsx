import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as React from 'react';
import {Col, Container, Row} from 'react-grid-system';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import Home from './Home';
import Portfolio from './Portfolio';

const logo = require('./logo.svg');

const App = () => (
  <MuiThemeProvider>
    <Router>
      <div className="App">
        <AppBar
          className="App-bar"
          title="CodeComfort"
          showMenuIconButton={false}
        >
          <List className="Menu-list">
            <ListItem>
              <Link to="/" className="Link-menu">Home</Link>
            </ListItem>
            <ListItem>
              <Link to="/portfolio" className="Link-menu">Portfolio</Link>
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
