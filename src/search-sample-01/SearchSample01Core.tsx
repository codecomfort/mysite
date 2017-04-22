import {Paper} from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import * as React from 'react';
import SearchResult from './SearchResult';
import {IContent} from './Interfaces';

interface IProps {
  searchResults: IContent[];
}

export const SearchSample01Core = (props: IProps) => {
  const { searchResults } = props;
  return (
    <div>
      <div>
        <TextField hintText="Search Words"
                   style={styles.textField}/>
        <RaisedButton label="Search"
                      style={styles.raisedButton.style}
                      labelStyle={styles.raisedButton.labelStyle}/>
      </div>
      <SearchResult contents={searchResults} />
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
