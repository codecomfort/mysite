import * as React from 'react';
import PortfolioPageOutline from '../PortfolioPageOutline';
import {SearchSample01Core} from './SearchSample01Core';
import {IContent} from './Interfaces';

export const SearchSample01 = () => (
  <PortfolioPageOutline
    title="Search Sample 01"
    link={{
      href: '',
      title: '',
    }}
    desc="Web Api の検索サンプルです"
    >
    <SearchSample01Core searchResults={searchResults} />
  </PortfolioPageOutline>
);

export class Content implements IContent {
  public id: number;
  public desc: string;

  constructor(id: number, desc: string) {
    this.id = id;
    this.desc = desc;
  }
}
const searchResults = [
  new Content(1, 'ここに１回目の検索結果'),
  // new Content(2, 'ここに２回目の検索結果'),
  // new Content(3, 'ここに３回目の検索結果'),
];
export default SearchSample01;
