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

interface MyAction {
  type: string;
  input?: string;
  jsonResult?: {
    httpStatus: string;
    recipes: Recipe[];
  }
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
      return {
        input: action.input || '',
        jsonResult: state.jsonResult
      };
    case ActionTypes.LIST_JSON:
      return {
        input: state.input,
        jsonResult: action.jsonResult || {
          httpStatus: '',
          recipes: []
        }
      };
    default:
      return state
  }
};

export class ActionDispatcher {
  private dispatch: (action: any) => any;

  constructor(dispatch: (action: any) => any) {
    this.dispatch = dispatch
  }

  handleOnChange = () =>
    (e: object, newValue: string) =>
      this.dispatch({
        type: ActionTypes.UPDATE_INPUT_WORD,
        input: newValue
      });

  handleTouchTap = (input: string) =>
    (e: object) => {
      if (isNullOrUndefined(input) || input === '') {
        alert('検索語を入れてください');
        return;
      }

      const recipes = this.getRecipes(input);
      if (recipes.length === 0) {
        this.dispatch({
          type: ActionTypes.LIST_JSON,
          jsonResult: {
            httpStatus: '200',
            recipes: []
          }
        });
        return;
      }

      this.dispatch({
        type: ActionTypes.LIST_JSON,
        jsonResult: {
          httpStatus: '200',
          recipes: recipes
        }
      });
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

