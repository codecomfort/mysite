import * as React from "react";
import {CounterState, ActionDispatcher} from "./module";

interface Props {
    value: CounterState;
    actions: ActionDispatcher;
}

// Root.tsx に Redux を切り出してあるので、Redux に依存しない実装ができる
export class Counter extends React.Component<Props, {}> {

    render() {
        return (
            <div>
                <p>score: {this.props.value.num}</p>
                <button onClick={() => this.props.actions.increment(3)}>Increment 3</button>
                <button onClick={() => this.props.actions.decrement(2)}>Decrement 2</button>
            </div>
        )
    }
}

export default Counter;