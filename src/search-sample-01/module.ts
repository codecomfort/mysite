// Ducks ファイル構成に倣い、Reducer や ActionDispatcher を単一ファイルにまとめておく
import * as Im from 'immutable';
import {ActionTypes, Content, IAction, IContent, ISearchSample01State} from './Interfaces';
import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';

export const reducer = (state: ISearchSample01State, action: IAction) => {
  let current;
  let next;
  let newValue;
  switch (action.type) {
    case ActionTypes.SEARCH:
      const searchResult = action.payload as IContent;
      return mergeSearchResults(state, searchResult);

    case ActionTypes.UPDATE_FROM:
      newValue = action.payload as string;
      current = Im.fromJS(state);
      next = current.merge({
        from: newValue,
      });

      return next.toJS();
    case ActionTypes.UPDATE_TO:
      newValue = action.payload as string;
      current = Im.fromJS(state);
      next = current.merge({
        to: newValue,
      });

      return next.toJS();
    case ActionTypes.UPDATE_CLASS:
      newValue = action.payload as string;
      current = Im.fromJS(state);
      next = current.merge({
        cls: newValue,
      });

      return next.toJS();
    default:
      return state;
  }
};

const mergeSearchResults = (currentState: ISearchSample01State, searchResult: IContent): ISearchSample01State => {
  // FIXME fromJS してから toJS するのダルい
  // Store でうまく immutable 化しときたいがやり方が分からん
  const current = Im.fromJS(currentState);

  let nextSearchResult;

  if (currentState.searchResults) {
    nextSearchResult = currentState.searchResults.concat(searchResult);
  }
  else {
    nextSearchResult = searchResult;
  }

  const next = current.merge({
    // push ではなく concat で非破壊追加してるが、本来そんなことを気にせず
    // Immutable を使って操作を書きたい
    searchResults: nextSearchResult,
  });
  return next.toJS();
};

export class ActionDispatcher {
  private dispatch: (action: any) => any;
  private store: any;

  constructor(dispatch: (action: any) => any, store: any) {
    this.dispatch = dispatch;
    this.store = store;
  }

  public handleOnFromChange = (e: object, index: number, newValue: string) => {
    this.dispatch({
      payload: newValue,
      type: ActionTypes.UPDATE_FROM,
    });
  }

  public handleOnToChange = (e: object, index: number, newValue: string) => {
    this.dispatch({
      payload: newValue,
      type: ActionTypes.UPDATE_TO,
    });
  }

  public handleOnClassChange = (e: object, index: number, newValue: string) => {
    this.dispatch({
      payload: newValue,
      type: ActionTypes.UPDATE_CLASS,
    });
  }

  // reducer は単純なステートの更新に専念し、非同期処理は ActionDispatcher 内で行う
  public handleOnSearch = async () => {

    const state = this.store.getState().searchSample01;

    if (!state.from || !state.to || !state.cls) {
      return;
    }

    const config: AxiosRequestConfig = {
      method: 'POST',
      url: 'https://dv1l86z113.execute-api.ap-northeast-1.amazonaws.com/prod/Search',
      data: {
        from: state.from,
        to: state.to,
        class: state.cls,
      },
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const response: AxiosResponse = await axios(config);
      const xml = response.data;
      const convert = require('xml-js');
      const result = convert.xml2js(xml, {compact: true, spaces: 4});
      const id = state.searchResults.length;
      this.dispatch({
        type: ActionTypes.SEARCH,
        payload: new Content(id, result.Result.Routes.Route[0].Summary.TotalToll._text),
      });
    }
    catch (err) {
      console.error(err.message);
    }
    finally {
      console.log('axios finished');
    }
  }
}

export default reducer;
