import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import * as React from 'react';

interface IProps {
}

export const SearchSample01Core = (props: IProps) => {
  return (
    <div>
      <TextField hintText="Search Words"
                 style={styles.textField}/>
      <RaisedButton label="Search"
                    style={styles.raisedButton.style}
                    labelStyle={styles.raisedButton.labelStyle}/>
    </div>
  );
};

const styles = {
  raisedButton: {
    labelStyle: {
      fontSize: 30,
    },
    style: {
      margin: 10,
    },
  },
  textField: {
    fontSize: 30,
    width: 700,
  },
};

export default SearchSample01Core;
