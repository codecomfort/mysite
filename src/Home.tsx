import Paper from 'material-ui/Paper';
import * as React from 'react';
import {Link} from 'react-router-dom';
import './Home.css';

const logo = require('./logo.svg');
const Home = () => (
  <div className="Home">
    <div className="Home-eyecatch">
      <img src={logo} className="Home-logo" alt="logo"/>
      <h1>CodeComfort Web Site</h1>
      <h2>コードで世界を快適に</h2>
    </div>
    <div>
      <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
    </div>
    <div className="Paper-container">
      <Paper className="Paper-style" zDepth={1}>aaa</Paper>
      <Paper className="Paper-style" zDepth={1}>bbb</Paper>
      <Paper className="Paper-style" zDepth={1}>ccc</Paper>
    </div>
  </div>
);

export default Home;
