import * as React from 'react';
import { Counter } from "./Counter";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { ActionDispatcher } from "./module";

// 引数の Counter(これは Redux に依存しない純粋な React コンポーネント) に
// store と actionDispatcher を差し込んで返すイメージ
// このように DI することで、Counter コンポーネントは Redux に依存しなくてよくなる
export default connect(
    (store: any) => ({value: store.counter}),
    (dispatch: Dispatch<any>) => ({actions: new ActionDispatcher(dispatch)})
)(Counter);