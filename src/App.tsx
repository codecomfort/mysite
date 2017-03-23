import * as React from 'react';
import './App.css';
import Home from './Home';
import Portfolio from './Portfolio';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const logo = require('./logo.svg');
const App = () => (
  <MuiThemeProvider>
    <Router>
      <div className="App">
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
