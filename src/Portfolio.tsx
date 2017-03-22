import * as React from 'react';
import { Route, Link } from 'react-router-dom';
import Counter from './counter/Root';

const Portfolio = () => (
  <div>
    <h2>Portfolio Page</h2>
    <ul>
        <li><Link to="/portfolio/counter">Counter</Link></li>
        <li><Link to="/">Home</Link></li>
    </ul>

    <Route path="/portfolio/counter" component={ Counter } />
  </div>
);

export default Portfolio;
