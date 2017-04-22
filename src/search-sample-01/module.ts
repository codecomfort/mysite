// Ducks ファイル構成に倣い、Reducer や ActionDispatcher を単一ファイルにまとめておく
import * as Im from 'immutable';
import {ActionTypes, IAction, IContent, ISearchSample01State} from './Interfaces';

export const reducer = (state: ISearchSample01State, action: IAction) => {
  switch (action.type) {
    case ActionTypes.UPDATE_STATE:
      return mergeSearchResults(state, action.payload);
    default:
      return state;
  }
};

const mergeSearchResults = (currentState: ISearchSample01State, searchResult: IContent): ISearchSample01State => {
  // FIXME fromJS してから toJS するのダルい
  // Store でうまく immutable 化しときたいがやり方が分からん
  const current = Im.fromJS(currentState);
  const next = current.merge({
    // push ではなく concat で非破壊追加してるが、本来そんなことを気にせず
    // Immutable を使って操作を書きたい
    searchResults: currentState.searchResults.concat(searchResult)
  });
  return next.toJS();
};

export class ActionDispatcher {
  private dispatch: (action: any) => any;

  constructor(dispatch: (action: any) => any) {
    this.dispatch = dispatch;
  }

  public updateState = (data: IContent) => {
    this.dispatch({type: ActionTypes.UPDATE_STATE, payload: data});
  }
}

export default reducer;
