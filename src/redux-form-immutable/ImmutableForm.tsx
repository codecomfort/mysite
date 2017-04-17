import * as React from 'react';
import PortfolioPageOutline from '../PortfolioPageOutline';
import ImmutableFormCore from './ImmutablFormCore';

export const ImmutableForm = () => (
  <PortfolioPageOutline
    title="Redux Form Immutable サンプル"
    link={{
      href: 'http://redux-form.com/6.6.3/examples/immutable/',
      title: '参考：Immutable JS Example - Redux Form',
    }}
    desc="Redux ステートを Immutable にして実装したもの。使用する側には特に関係ありません。"
  >
    <ImmutableFormCore onSubmit={ (values) => alert(values) } />
  </PortfolioPageOutline>
);

export default ImmutableForm;

