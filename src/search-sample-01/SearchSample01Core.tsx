import MenuItem from 'material-ui/MenuItem';
import {Paper} from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import * as React from 'react';
import SearchResult from './SearchResult';
import {IContent} from './Interfaces';

interface IProps {
  searchResults?: IContent[];
  from: string;
  froms: string[];
  to: string;
  tos: string[];
  cls: string;
  classes: string[];
  onFromChange: (e: object, index: number, newValue: string) => void;
  onToChange: (e: object, index: number, newValue: string) => void;
  onClassChange: (e: object, index: number, newValue: string) => void;
  onSearch: () => void;
}

export const SearchSample01Core = (props: IProps) => {
  const {from, froms, to, tos, cls, classes, searchResults, onFromChange, onSearch, onToChange, onClassChange} = props;
  return (
    <div>
      <div>
        <SelectField
          floatingLabelText="From"
          children={froms.map((from) => <MenuItem key={from} value={from} primaryText={from}/>)}
          value={from}
          onChange={onFromChange}/>
        <SelectField
          floatingLabelText="To"
          children={tos.map((to) => <MenuItem key={to} value={to} primaryText={to}/>)}
          value={to}
          onChange={onToChange}/>
        <SelectField
          floatingLabelText="Class"
          children={classes.map((cls) => <MenuItem key={cls} value={cls} primaryText={cls}/>)}
          value={cls}
          onChange={onClassChange}/>
        <RaisedButton label="Search"
                      style={styles.raisedButton.style}
                      onTouchTap={ onSearch }
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
