import * as Im from 'immutable';
import * as React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {ActionDispatcher} from './module';
import View from './View';

// state を受け取ったら、必要な部分を取り出して View へ props 経由で渡す
const mapStateToProps =
  (state: Im.Map<string, any>) => ({value: state.get('awsApiSample01')});

// dispatch はアクション(アクション名や付加情報のオブジェクト)を受け取り Reducer をキックする関数
// ActionDispatcher ではこれを利用して Redux に更新をかける
// これも View へ props 経由で渡す
const mapDispatchToProps =
  (dispatch: Dispatch<any>) => ({actions: new ActionDispatcher(dispatch)});
export default connect(mapStateToProps, mapDispatchToProps)(View);

// 参考
// interface ViewProps {
//  value: IViewState;
//  actions: ActionDispatcher;
// }
