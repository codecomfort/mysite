// Ducks ファイル構成に倣い、Reducer や ActionDispatcher を単一ファイルにまとめておく

export interface ICounterState {
  num: number;
}

interface IAction {
  type: string;
  amount?: number;
}

export class ActionTypes {
  public static INCREMENT = 'counter/increment';
  public static DECREMENT = 'counter/decrement';
}

const initialState: ICounterState = {num: 0};

export default function reducer(state: ICounterState = initialState, action: IAction): ICounterState {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return {num: state.num + action.amount};
    case ActionTypes.DECREMENT:
      return {num: state.num - action.amount};
    default:
      return state
  }
}

// ActionDispatcher
export class ActionDispatcher {
  private dispatch: (action: any) => any;

  constructor(dispatch: (action: any) => any) {
    this.dispatch = dispatch;
  }

  public increment(amount: number) {
    this.dispatch({ type: ActionTypes.INCREMENT, amount: amount});
  }

  public decrement(amount: number) {
    this.dispatch({ type: ActionTypes.DECREMENT, amount: amount});
  }
}
