import RaisedButton from 'material-ui/RaisedButton';
import * as React from 'react';
import PortfolioPageOutline from '../PortfolioPageOutline';
import {ActionDispatcher, ICounterState} from './module';

interface IProps {
  value: ICounterState;
  actions: ActionDispatcher;
}

// Root.tsx に Redux を切り出してあるので、Redux に依存しない実装ができる
const Counter = (props: IProps) => (
  <PortfolioPageOutline
    title="Counter サンプル"
    link={{
      href: 'http://qiita.com/uryyyyyyy/items/3ad88cf9ca9393335f8c',
      title: '参考：React + Redux + TypeScriptの最小構成 - Qiita',
    }}
    desc="環境構築、Ducks 構成、および TypeScript の勉強のためのサンプルです。">
    <div>
      <p>score: {props.value.num}</p>
      <RaisedButton onClick={() => props.actions.increment(3)} label="Increment 3"/>
      <RaisedButton onClick={() => props.actions.decrement(2)} label="Decrement 2"/>
    </div>
  </PortfolioPageOutline>
);

export default Counter;
