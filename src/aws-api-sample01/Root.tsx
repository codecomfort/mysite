import * as React from 'react';
import View from './View';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {ActionDispatcher} from './module';

export default connect(
  (store: any) => ({value: store.awsApiSample01}),
  (dispatch: Dispatch<any>) => ({actions: new ActionDispatcher(dispatch)})
)(View);
