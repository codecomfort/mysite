import * as React from 'react';
import Square from './Square';

interface Props {
  squares: Array<string>;
  onClick(i: number): void;
}

export class Board extends React.Component<Props, any> {
  renderSquare(i: number) {
    const squares = this.props.squares;
    return <Square value={squares[i]} onClick={() => this.props.onClick(i)}/>;
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}

export default Board;
