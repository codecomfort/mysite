import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import FlatButton from 'material-ui/FlatButton';
import {List, ListItem} from 'material-ui/List';
import {Menu, MenuItem} from 'material-ui/Menu';
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
  drawerDocked: boolean;
  drawerOpened: boolean;
}

export default class App extends React.Component<{}, IAppState> {
  constructor() {
    super();
    this.state = {
      drawerDocked: false,
      drawerOpened: false,
    };
  }

  public render() {
    return (
      <MuiThemeProvider>
        <Router>
          <div className="App">
            <Drawer
              tabIndex={0}
              docked={this.state.drawerDocked}
              width={300}
              open={this.state.drawerOpened}
              onRequestChange={ (isOpened) =>
                this.setState({
                  drawerOpened: isOpened,
                })}>
              <div className="Menu-title">
                <FlatButton
                  onTouchTap={ () =>
                    this.setState({
                      drawerDocked: false,
                      drawerOpened: false,
                    })}>
                  <Link to="/" className="Link-menu">CodeComfort</Link>
                </FlatButton>
              </div>
              <Menu className="Menu-list">
                <MenuItem
                  primaryText="Portfolio"
                  primaryTogglesNestedList={true}
                  initiallyOpen={true}
                  nestedItems={[
                    <MenuItem key={0}
                              onTouchTap={ () =>
                                this.setState({
                                  drawerDocked: true,
                                  drawerOpened: false,
                                })}>
                      <Link to="/portfolio/counter">Counter</Link>
                    </MenuItem>,
                    <MenuItem key={1}
                              onTouchTap={ () =>
                                this.setState({
                                  drawerDocked: true,
                                  drawerOpened: false,
                                })}>
                      <Link to="/portfolio/react-tutorial-tictactoe">React Tutorial Tic Tac
                        Toe</Link></MenuItem>,
                    <MenuItem key={2}
                              onTouchTap={ () =>
                                this.setState({
                                  drawerDocked: true,
                                  drawerOpened: false,
                                })}>
                      <Link to="/portfolio/aws-api-sample01">AWS ApiGateway Lambda
                        Sample</Link></MenuItem>,
                  ]}>
                </MenuItem>
                <MenuItem primaryText="About"></MenuItem>
              </Menu>
            </Drawer>
            <AppBar
              className="App-bar"
              iconElementRight={
                <IconButton iconClassName="muidocs-icon-custom-github"
                            href="https://github.com/codecomfort/"
                            target="_blank"/> }
              onLeftIconButtonTouchTap={ () =>
                this.setState({
                  drawerDocked: false,
                  drawerOpened: true,
                })}
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

