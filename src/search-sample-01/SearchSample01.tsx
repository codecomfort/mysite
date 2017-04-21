import * as React from 'react';
import PortfolioPageOutline from '../PortfolioPageOutline';
import {SearchSample01Core} from './SearchSample01Core';

export const SearchSample01 = () => (
  <PortfolioPageOutline
    title="Search Sample 01"
    link={{
      href: '',
      title: '',
    }}
    desc="Web Api の検索サンプルです"
    >
    <SearchSample01Core />
  </PortfolioPageOutline>
);

export default SearchSample01;
