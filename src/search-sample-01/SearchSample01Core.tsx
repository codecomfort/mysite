import {Paper} from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import * as React from 'react';
import { Content, SearchResult} from './SearchResult';
interface IProps {
}

export const SearchSample01Core = (props: IProps) => {
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

const searchResults = [
    new Content(1, 'ここに１回目の検索結果'),
    new Content(2, 'ここに２回目の検索結果'),
    new Content(3, 'ここに３回目の検索結果'),
  ];

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
