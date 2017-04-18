import * as React from 'react';
import PortfolioPageOutline from '../PortfolioPageOutline';
import MaterialUiFormCore from './MaterialUiFormCore';

export const MaterialUiForm = () => (
    <PortfolioPageOutline
      title="Redux Form Material-UI サンプル"
      link={{
        href: 'http://redux-form.com/6.6.3/examples/material-ui/',
        title: '参考：Material UI Example',
      }}
      desc="UI に Material-UI を使用したフォームです。バリデーションは非同期バリデーションです。"
    >
      <MaterialUiFormCore onSubmit={ (values) => alert(values) } />
    </PortfolioPageOutline>
  )
;

export default MaterialUiForm;

