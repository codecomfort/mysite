import IconButton from 'material-ui/IconButton';
import * as React from 'react';
import './HomeFooter.css';

const HomeFooter = () => (
  <div className="Home-footer">
    <p>Hand crafted with love by the engineers at CodeComfort and our awesome contributors</p>
    <IconButton iconClassName="muidocs-icon-custom-github"
                href="https://github.com/codecomfort/"
                target="_blank"/>
  </div>
);

export default HomeFooter;

