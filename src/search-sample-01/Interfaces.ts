export interface IContent {
  id: number;
  desc: string;
}

export interface ISearchSample01State {
  searchResults?: IContent[];
}

export class ActionTypes {
  public static SEARCH = 'searchsample01/search';
}

export interface IAction {
  type: ActionTypes;
  payload: ISearchSpec;
}

export class Content implements IContent {
  public id: number;
  public desc: string;

  constructor(id: number, desc: string) {
    this.id = id;
    this.desc = desc;
  }
}

export interface ISearchSpec {
  word: string;
  // いろいろ検索条件を定義する予定
}
