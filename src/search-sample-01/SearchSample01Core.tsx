import {Paper} from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import * as React from 'react';
import SearchResult from './SearchResult';
import {Content, IContent} from './Interfaces';

interface IProps {
  searchResults: IContent[];
  onSearch: (data: IContent) => void;
}

export const SearchSample01Core = (props: IProps) => {
  const {searchResults, onSearch} = props;
  const handleTouchTap = (data: IContent) => {
    // TODO とりあえずダミーを返しておく
    onSearch(new Content(searchResults.length, '???'));
  };
  return (
    <div>
      <div>
        <TextField hintText="Search Words"
                   style={styles.textField}/>
        <RaisedButton label="Search"
                      style={styles.raisedButton.style}
                      onTouchTap={handleTouchTap}
                      labelStyle={styles.raisedButton.labelStyle}/>
      </div>
      <SearchResult contents={ searchResults }/>
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
