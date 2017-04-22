
export class ActionTypes {
  public static UPDATE_STATE = 'searchsample01/update_state';
}

export interface IAction {
  type: ActionTypes;
  payload: any;
}

export interface IContent {
  id: number;
  desc: string;
}

export interface ISearchSample01State {
  searchResults: IContent[];
}
