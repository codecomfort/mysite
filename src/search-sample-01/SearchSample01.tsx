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
  const { cls, from, to, searchResults} = props.value;
  const { handleOnFromChange, handleOnToChange, handleOnClassChange, handleOnSearch } = props.actions;
  return (
    <PortfolioPageOutline
      title="Search Sample 01"
      link={{
        href: 'http://qiita.com/uryyyyyyy/items/d8bae6a7fca1c4732696',
        title: 'ReduxでのMiddleware不要論',
      }}
      desc="非同期アクセスのサンプルです。バックエンドの AWS Lambda 経由で Web Api へアクセスし結果を取得します。参考リンクにもあるように、非同期制御に middleware を使用していません。Web Api は高速.jp を使用しています。"

    >
      <SearchSample01Core searchResults={searchResults}
                          onFromChange={handleOnFromChange}
                          onToChange={handleOnToChange}
                          onClassChange={handleOnClassChange}
                          from={from}
                          froms={['柏','三郷']}
                          to={to}
                          tos={['土浦北', '水戸']}
                          cls={cls}
                          classes={['普通車', '軽']}
                          onSearch={ handleOnSearch }
      />
    </PortfolioPageOutline>
  );
};

export default SearchSample01;
