import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import {List, ListItem} from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import Home from './Home';
import Portfolio from './Portfolio';
import './css/font-icons.css';

const logo = require('./logo.svg');

interface IAppState {
  drawerOpened: boolean;
}

export default class App extends React.Component<{}, IAppState> {
  constructor() {
    super();
    this.state = {
      drawerOpened: false,
    };
  }

  public render() {
    return (
      <MuiThemeProvider>
        <Router>
          <div className="App">
            <Drawer
              docked={false}
              width={200}
              open={this.state.drawerOpened}
              onRequestChange={ (isOpened) =>
                this.setState({
                  drawerOpened: isOpened,
                })}>
              <div className="Menu-title">CodeComfort</div>
              <List className="Menu-list">
                <ListItem><Link to="/" className="Link-menu">Home</Link></ListItem>
                <ListItem><Link to="/portfolio" className="Link-menu">Portfolio</Link>
                </ListItem><ListItem primaryText="About"/>
              </List>
            </Drawer>
            <AppBar
              className="App-bar"
              iconElementRight={
                <IconButton iconClassName="muidocs-icon-custom-github"
                            href="https://github.com/codecomfort/"
                            target="_blank"/> }
              onLeftIconButtonTouchTap={ (isOpened) => this.setState({drawerOpened: isOpened})}
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
  }
}

