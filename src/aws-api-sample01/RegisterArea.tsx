import * as React from 'react';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';

interface IRegisterArea {
  onChange: (e: object, newValue: string) => void;
  onTouchTap: (e: object) => void;
  input: string;
}
export const RegisterArea = (props: IRegisterArea) => <div>
  <TextField
    style={styles.textFieldStyles}
    hintText="登録レシピ名"
    onChange={ props.onChange }
    value={ props.input }
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

export default RegisterArea;
