import * as React from 'react';
import PortfolioPageOutline from '../PortfolioPageOutline';

export const MaterialUiForm = () => (
    <PortfolioPageOutline
      title="Redux Form Material-UI サンプル"
      link={{
        href: 'http://redux-form.com/6.6.3/examples/material-ui/',
        title: 'Material UI Example',
      }}
      desc="UI に Material-UI を使用したフォームです。バリデーションは非同期バリデーションです。"
    >
      ここに Material-UI のフォーム
    </PortfolioPageOutline>
  )
;

export default MaterialUiForm;

