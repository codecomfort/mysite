export interface IContent {
  id: number;
  desc: string;
}

export interface ISearchSample01State {
  searchResults?: IContent[];
  searchWord?: string;
}

export class ActionTypes {
  public static SEARCH = 'searchsample01/search';
  public static UPDATE_INPUT_WORD = 'searchsample01/update_input_word';
}

export interface IAction {
  type: ActionTypes;
  payload: IContent | string;
}

export class Content implements IContent {
  public id: number;
  public desc: string;

  constructor(id: number, desc: string) {
    this.id = id;
    this.desc = desc;
  }
}
