import * as Im from 'immutable';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {ActionDispatcher} from './module';
import SearchSample01 from './SearchSample01';

const masStateToProps =
  (state) => ({value: state.searchSample01});

const mapDispatchToProps =
  (dispatch: Dispatch<any>) => ({actions: new ActionDispatcher(dispatch)});

export default connect(masStateToProps, mapDispatchToProps)(SearchSample01);

// 参考
// interface IProps {
//   value: ISearchSample01State;
//   actions: SampleActionDispatcher;
// }
