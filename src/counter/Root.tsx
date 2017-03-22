import * as React from 'react';
import { Counter } from "./Counter";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { ActionDispatcher } from "./module";

// 引数の Counter に store と actionDispatcher を紐付けた上位互換的なコンポーネントを返すイメージ
// また、このようにラップすることで、Counter コンポーネントは Redux に依存しなくてよくなる
export default connect(
    (store: any) => ({value: store.counter}),
    (dispatch: Dispatch<any>) => ({actions: new ActionDispatcher(dispatch)})
)(Counter);