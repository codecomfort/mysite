import * as React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
    <div className="Home">
        <h2>Home</h2>
        <Link to="/portfolio">Portfolio</Link>
    </div>
);

export default Home;