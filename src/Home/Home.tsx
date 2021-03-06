import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import * as React from 'react';
import {Link} from 'react-router-dom';
import './Home.css';
import HomeFooter from './HomeFooter';

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
    return (
      <div className="Home">
        <div className="Home-eyecatch">
          <img src={logo} className="Home-logo" alt="logo"/>
          <h1>CodeComfort Web Site</h1>
          <h2>コードで世界を快適に</h2>
        </div>
        <div className="Home-purpose">
          <p>いいコードは、世界を快適にします。いいコードは、開発者も快適にします。いいコードを書こう。</p>
        </div>
        <div className="Paper-container clearfix">
          <Paper className="Paper-style" zDepth={this.state.paper1zDepth}
                 onMouseEnter={ () => this.setState({paper1zDepth: 2})}
                 onMouseLeave={ () => this.setState({paper1zDepth: 1})}>
            <h3 className="Paper-header">Portfolio</h3>
            <div className="Paper-body">画像</div>
          </Paper>
          <Paper className="Paper-style" zDepth={this.state.paper2zDepth}
                 onMouseEnter={ () => this.setState({paper2zDepth: 2})}
                 onMouseLeave={ () => this.setState({paper2zDepth: 1})}>
            <h3 className="Paper-header">About</h3>
            <div className="Paper-body">画像</div>
          </Paper>
          <Paper className="Paper-style" zDepth={this.state.paper3zDepth}
                 onMouseEnter={ () => this.setState({paper3zDepth: 2})}
                 onMouseLeave={ () => this.setState({paper3zDepth: 1})}>
            <h3 className="Paper-header">その他</h3>
            <div className="Paper-body">画像</div>
          </Paper>
        </div>
        <div className="Home-bottom">
          <p>本サイトの作成には React, Redux, TypeScript, Material-UI が使用されています</p>
          <RaisedButton className="Github-button" href="https://github.com/codecomfort/">GitHub</RaisedButton>
        </div>
        <HomeFooter />
      </div>
    );
  }
}

