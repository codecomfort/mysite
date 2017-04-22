import * as React from 'react';
import PortfolioPageOutline from '../PortfolioPageOutline';
import {ISearchSample01State} from './Interfaces';
import {ActionDispatcher} from './module';
import {SearchSample01Core} from './SearchSample01Core';

interface IProps {
  value: ISearchSample01State;
  actions: ActionDispatcher;
}

const SearchSample01 = (props: IProps) => {
  const {searchResults} = props.value;
  const {updateState} = props.actions;
  return (
    <PortfolioPageOutline
      title="Search Sample 01"
      link={{
        href: '',
        title: '',
      }}
      desc="Web Api の検索サンプルです"
    >
      <SearchSample01Core searchResults={searchResults}
                          onSearch={updateState}
      />
    </PortfolioPageOutline>
  );
};

export default SearchSample01;
