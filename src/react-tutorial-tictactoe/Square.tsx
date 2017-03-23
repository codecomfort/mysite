import * as React from 'react';

interface Props {
  value: string;
  onClick(): void;
}

export const Square = (props: Props) => (
  <button className="square" onClick={() => props.onClick()}>
    {props.value}
  </button>
);

export default Square;
