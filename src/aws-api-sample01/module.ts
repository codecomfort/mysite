import {Dispatch} from 'redux';
const isNullOrUndefined = require('is-nil');

export interface Recipe {
  'id': number;
  'key1': string;
  'key2': string;
}

export interface ViewState {
  input: string;
  jsonResult: {
    httpStatus: string;
    recipes: Recipe[];
  }
}

interface JsonResult {
  httpStatus: string;
  recipes: Recipe[];
}

interface MyAction {
  type: ActionTypes;
  data?: string | JsonResult;
}

export class ActionTypes {
  static UPDATE_INPUT_WORD = 'awsapisample01/update_input_word';
  static LIST_JSON = 'awsapisample01/list_json';
}

const initialState: ViewState = {
  input: '',
  jsonResult: {
    httpStatus: '',
    recipes: []
  }
};

export const reducer = (state: ViewState = initialState, action: MyAction): ViewState => {
  switch (action.type) {
    case ActionTypes.UPDATE_INPUT_WORD:
      // FIXME いちいち自身と関係ない state をセットするのはダルい。
      // マージするようなメソッドを使って差分だけ更新できないか
      return {
        input: <string>action.data || '',
        jsonResult: state.jsonResult
      };
    case ActionTypes.LIST_JSON:
      return {
        input: state.input,
        jsonResult: <JsonResult>action.data || {
          httpStatus: '',
          recipes: []
        }
      };
    default:
      return state
  }
};

export class ActionDispatcher {
  private dispatch: Dispatch<any>;

  constructor(dispatch: Dispatch<any>) {
    this.dispatch = dispatch
  }

  handleOnChange = () =>
    (e: object, newValue: string) => {
      const inputChangedAction: MyAction = {
        type: ActionTypes.UPDATE_INPUT_WORD,
        data: newValue
      };
      this.dispatch(inputChangedAction);
    };

  handleTouchTap = (input: string) =>
    (e: object) => {
      if (isNullOrUndefined(input) || input === '') {
        alert('検索語を入れてください');
        return;
      }

      const recipes = this.getRecipes(input);
      if (recipes.length === 0) {
        const noDataFoundAction: MyAction = {
          type: ActionTypes.LIST_JSON,
          data: {
            httpStatus: '200',
            recipes: []
          }
        };
        this.dispatch(noDataFoundAction);
        return;
      }

      const dataFoundAction: MyAction = {
        type: ActionTypes.LIST_JSON,
        data: {
          httpStatus: '200',
          recipes: recipes
        }
      };
      this.dispatch(dataFoundAction);
    };

  private getRecipes = (word: string): Recipe[] =>
    this.sampleRecipes.filter(val => val.key1 === word);

  private sampleRecipes = [
    {
      'id': 1,
      'key1': 'a',
      'key2': 'a-1'
    },
    {
      'id': 2,
      'key1': 'a',
      'key2': 'a-2'
    },
    {
      'id': 3,
      'key1': 'a',
      'key2': 'a-3'
    },
    {
      'id': 4,
      'key1': 'b',
      'key2': 'b-1'
    },
  ];
}

export default reducer;

