import * as React from 'react';
import {CounterState, ActionDispatcher} from './module';
import RaisedButton from 'material-ui/RaisedButton';

interface Props {
  value: CounterState;
  actions: ActionDispatcher;
}

// Root.tsx に Redux を切り出してあるので、Redux に依存しない実装ができる
export class Counter extends React.Component<Props, {}> {
  render() {
    return <div>
      <div>
        <h2>Counter サンプル</h2>
        <p>score: {this.props.value.num}</p>
        <RaisedButton onClick={() => this.props.actions.increment(3)} label="Increment 3"/>
        <RaisedButton onClick={() => this.props.actions.decrement(2)} label="Decrement 2"/>
      </div>
      <br />
      <div>
        <a href="http://qiita.com/uryyyyyyy/items/3ad88cf9ca9393335f8c">参考：React + Redux + TypeScriptの最小構成 - Qiita</a>
      </div>
    </div>
  }
}

export default Counter;
