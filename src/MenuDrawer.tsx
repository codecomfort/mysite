import Drawer from 'material-ui/Drawer';
import FlatButton from 'material-ui/FlatButton';
import {Menu, MenuItem} from 'material-ui/Menu';
import * as React from 'react';
import {Link} from 'react-router-dom';
import './MenuDrawer.css';

interface IDrawerState {
  drawerDocked: boolean;
  drawerOpened: boolean;
  onDrawerChanged: (isDocked, isOpened) => void;
}

const MenuDrawer = (props: IDrawerState) => (
  <Drawer
    tabIndex={0}
    docked={props.drawerDocked}
    width={300}
    open={props.drawerOpened}
    onRequestChange={ (isOpened) => props.onDrawerChanged(true, isOpened) }>
    <div className="Menu-title">
      <FlatButton
        onTouchTap={ () => props.onDrawerChanged(false, false) }>
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
                    onTouchTap={ () => props.onDrawerChanged(true, true) }>
            <Link to="/portfolio/counter">Counter</Link>
          </MenuItem>,
          <MenuItem key={1}
                    onTouchTap={ () => props.onDrawerChanged(true, true) }>
            <Link to="/portfolio/react-tutorial-tictactoe">React Tutorial Tic Tac
              Toe</Link></MenuItem>,
          <MenuItem key={2}
                    onTouchTap={ () => props.onDrawerChanged(true, true) }>
            <Link to="/portfolio/aws-api-sample01">AWS ApiGateway Lambda
              Sample</Link></MenuItem>,
        ]}>
      </MenuItem>
      <MenuItem primaryText="About"></MenuItem>
    </Menu>
  </Drawer>
);

export default MenuDrawer;
