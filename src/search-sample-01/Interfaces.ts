export interface IContent {
  id: number;
  desc: string;
}

export interface ISearchSample01State {
  searchResults?: IContent[];
  // ['class']: string;
  cls: string;
  from: string;
  to: string;
}

export class ActionTypes {
  public static SEARCH = 'searchsample01/search';
  public static UPDATE_FROM = 'searchsample01/update_from';
  public static UPDATE_TO = 'searchsample01/update_to';
  public static UPDATE_CLASS = 'searchsample01/update_class';
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
