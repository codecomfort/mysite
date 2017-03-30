import * as React from 'react';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import {StatelessComponent} from 'react';

interface IInputArea {
  onChange: (e: object, newValue: string) => void;
  onTouchTap: (e: object) => void;
}
export const InputArea: StatelessComponent<IInputArea> = (props) => <div>
  <TextField
    style={styles.textFieldStyles}
    hintText="レシピ名"
    onChange={ props.onChange }
  />
  <IconButton
    onTouchTap={ props.onTouchTap }>
    <i className="material-icons"
       style={styles.iconStyles}>
      search
    </i>
  </IconButton>
</div>;

const styles = {
  textFieldStyles: {
    fontSize: 20
  },
  iconStyles: {
    fontSize: '36px'
  }
};

export default InputArea;
