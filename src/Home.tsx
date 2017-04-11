import * as React from 'react';
import {Link} from 'react-router-dom';

const logo = require('./logo.svg');
const Home = () => (
  <div className="Home">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo"/>
      <h2>Welcome to CodeComfort Web Site!!!</h2>
    </div>
    <h2>This is Home Page</h2>
  </div>
);

export default Home;
