import * as Im from 'immutable';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {ActionDispatcher} from './module';
import SearchSample01 from './SearchSample01';
import store from '../Store';

const masStateToProps =
  (state) => ({value: state.searchSample01});

// ActionDispatcher 内で最新のステートを取得できるよう、store の参照を渡しておく
const mapDispatchToProps =
  (dispatch: Dispatch<any>) => ({actions: new ActionDispatcher(dispatch, store)});

export default connect(masStateToProps, mapDispatchToProps)(SearchSample01);

// 参考
// interface IProps {
//   value: ISearchSample01State;
//   actions: SampleActionDispatcher;
// }
