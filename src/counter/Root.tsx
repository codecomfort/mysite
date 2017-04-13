import * as Im from 'immutable';
import * as React from 'react';
import {Counter} from './Counter';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {ActionDispatcher} from './module';

// 引数の Counter(これは Redux に依存しない純粋な React コンポーネント) に store と actionDispatcher を差し込んで返す
// このように DI することで、Counter コンポーネントは Redux に依存しなくてよくなる Higher Order Components と呼ばれる手法
// また、右辺の store と dispatch については index.tsx で Provider の store を設定していることで、
// 宣言することなく使用できる
// さらに、store.counter の counter は、Store.ts 内で宣言されている
export default connect(
  (store: Im.Map<string, any>) => ({value: store.get('counter')}),
  (dispatch: Dispatch<any>) => ({actions: new ActionDispatcher(dispatch)}),
)(Counter);
