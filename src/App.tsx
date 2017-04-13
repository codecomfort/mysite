import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import {List, ListItem} from 'material-ui/List';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import MenuDrawer from './MenuDrawer';
import Portfolio from './Portfolio';
import './css/font-icons.css';

export default class App extends React.Component<{}, any> {
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
            <MenuDrawer
              drawerDocked={this.state.drawerDocked}
              drawerOpened={this.state.drawerOpened}
              onDrawerChanged={ this.updateDrawerState }/>
            <AppBar
              className="App-bar"
              iconElementRight={
                <IconButton iconClassName="muidocs-icon-custom-github"
                            href="https://github.com/codecomfort/"
                            target="_blank"/> }
              onLeftIconButtonTouchTap={ () => this.updateDrawerState(false, true) }/>
            <Route exact path="/" component={ Home }/>
            <Route path="/portfolio" component={ Portfolio }/>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }

  private updateDrawerState =
    (isDocked, isOpened) =>
      this.setState({
        drawerDocked: isDocked,
        drawerOpened: isOpened,
      })
}

