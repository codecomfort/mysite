import * as Im from 'immutable';
import {Dispatch} from 'redux';
const isNullOrUndefined = require('is-nil');
import axios from 'axios';

export interface IRecipe {
  'id': number;
  'key1': string;
  'key2': string;
}

export interface IViewState {
  input: string;
  inputForRegister: string;
  jsonResult: {
    httpStatus: string;
    recipes: IRecipe[];
  },
}

interface IJsonResult {
  httpStatus: string;
  recipes: IRecipe[];
}

interface IAction {
  type: ActionTypes;
  data?: string | IJsonResult;
}

export class ActionTypes {
  public static UPDATE_INPUT_WORD = 'awsapisample01/update_input_word';
  public static UPDATE_INPUT_WORD_FOR_REGISTER = 'awsapisample01/update_input_word_for_register';
  public static LIST_JSON = 'awsapisample01/list_json';
}

export const reducer = (state: IViewState, action: IAction): IViewState => {
  let current;
  let next;
  switch (action.type) {
    case ActionTypes.UPDATE_INPUT_WORD:
      current = Im.fromJS(state);
      next = current.merge({
        input: action.data as string || '',
      });
      return next.toJS();
    case ActionTypes.UPDATE_INPUT_WORD_FOR_REGISTER:
      current = Im.fromJS(state);
      next = current.merge({
        inputForRegister: action.data as string || '',
      });
      return next.toJS();
    case ActionTypes.LIST_JSON:
      current = Im.fromJS(state);
      next = current.merge({
        jsonResult: action.data as IJsonResult || {
          httpStatus: '',
          recipes: [],
        },
      });
      return next.toJS();
    default:
      return state;
  }
};

export class ActionDispatcher {
  private dispatch: Dispatch<any>;

  private sampleRecipes = [
    {
      'id': 1,
      'key1': 'a',
      'key2': 'a-1',
    },
    {
      'id': 2,
      'key1': 'a',
      'key2': 'a-2',
    },
    {
      'id': 3,
      'key1': 'a',
      'key2': 'a-3',
    },
    {
      'id': 4,
      'key1': 'b',
      'key2': 'b-1',
    },
  ];

  constructor(dispatch: Dispatch<any>) {
    this.dispatch = dispatch;
  }

  public handleOnChange = () =>
    (e: object, newValue: string) => {
      const inputChangedAction: IAction = {
        data: newValue,
        type: ActionTypes.UPDATE_INPUT_WORD,
      };
      this.dispatch(inputChangedAction);
    }

  public handleOnChangeForRegister = () =>
    (e: object, newValue: string) => {
      const inputChangedAction: IAction = {
        data: newValue,
        type: ActionTypes.UPDATE_INPUT_WORD_FOR_REGISTER,
      };
      this.dispatch(inputChangedAction);
    }

  public handleTouchTap = (input: string) =>
    (e: object) => {
      if (isNullOrUndefined(input) || input === '') {
        alert('検索語を入れてください');
        return;
      }

      const recipes = this.getRecipes(input);
      if (recipes.length === 0) {
        const noDataFoundAction: IAction = {
          data: {
            httpStatus: '200',
            recipes: [],
          },
          type: ActionTypes.LIST_JSON,
        };
        this.dispatch(noDataFoundAction);
        return;
      }

      const dataFoundAction: IAction = {
        data: {
          httpStatus: '200',
          recipes: recipes,
        },
        type: ActionTypes.LIST_JSON,
      };
      this.dispatch(dataFoundAction);
    }

  public handleTouchTapForRegister = (input: string) =>
    (e: object) => {
      if (isNullOrUndefined(input) || input === '') {
        alert('登録レシピを入れてください');
        return;
      }

      // とりあえずバリデーションなしで何でも登録

      // AWS では CORS を有効にしておく
      // API Gateway リソースの CORS を有効にする - Amazon API Gateway
      // http://docs.aws.amazon.com/ja_jp/apigateway/latest/developerguide/how-to-cors.html#how-to-cors-console
      axios.post('https://qmkthsx5o2.execute-api.ap-northeast-1.amazonaws.com/prod/DynamoDBManager',
        {
          operation: 'create',
          payload: {
            Item: {
              'item3': input,
              'key1': 'foo',
              'key2': 'bar',
            },
          },
          tableName: 'sampleTable',
        }).then((res) => {
        // 登録に成功したら、登録の入力フィールドを空にする
        const registerOkAction: IAction = {
          data: '',
          type: ActionTypes.UPDATE_INPUT_WORD_FOR_REGISTER,
        };
        this.dispatch(registerOkAction);
        return;
      }).catch((err) => {
        alert('登録できませんでした');
        console.log(err.message);
        return;
      });

    };
  private getRecipes = (word: string): IRecipe[] =>
    this.sampleRecipes.filter((val) => val.key1 === word)

}

export default reducer;

