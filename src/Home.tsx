import * as Im from 'immutable';
import Paper from 'material-ui/Paper';
import * as React from 'react';
import {Link} from 'react-router-dom';
import './Home.css';

const logo = require('./logo.svg');
interface IHomeState {
  paper1zDepth: number;
  paper2zDepth: number;
  paper3zDepth: number;
}

export default class Home extends React.Component<{}, IHomeState> {
  constructor() {
    super();
    this.state = {
      paper1zDepth: 1,
      paper2zDepth: 1,
      paper3zDepth: 1,
    };
  }

  public render() {
    const current = Im.fromJS(this.state);
    return (
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
          <Paper className="Paper-style" zDepth={this.state.paper1zDepth}
                 onMouseEnter={ () => this.setState(current.merge({paper1zDepth: 2}).toJS())}
                 onMouseLeave={ () => this.setState(current.merge({paper1zDepth: 1}).toJS())}
          >aaa</Paper>
          <Paper className="Paper-style" zDepth={this.state.paper2zDepth}
                 onMouseEnter={ () => this.setState(current.merge({paper2zDepth: 2}).toJS())}
                 onMouseLeave={ () => this.setState(current.merge({paper2zDepth: 1}).toJS())}
          >bbb</Paper>
          <Paper className="Paper-style" zDepth={this.state.paper3zDepth}
                 onMouseEnter={ () => this.setState(current.merge({paper3zDepth: 2}).toJS())}
                 onMouseLeave={ () => this.setState(current.merge({paper3zDepth: 1}).toJS())}
          >ccc</Paper>
        </div>
      </div>
    );
  }
}

