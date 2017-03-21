import * as React from 'react';

const logo = require('./logo.svg');

const Home = () => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to CodeComfort Web Site!!!</h2>
    </div>
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
    <ul>
    </ul>
  </div>
);

export default Home;