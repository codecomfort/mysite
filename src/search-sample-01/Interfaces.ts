export interface IContent {
  id: number;
  desc: string;
}

export interface ISearchSample01State {
  searchResults: IContent[];
}

export class ActionTypes {
  public static UPDATE_STATE = 'searchsample01/update_state';
}

export interface IAction {
  type: ActionTypes;
  payload: IContent;
}

export class Content implements IContent {
  public id: number;
  public desc: string;

  constructor(id: number, desc: string) {
    this.id = id;
    this.desc = desc;
  }
}
