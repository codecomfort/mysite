import * as React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import {InputArea} from './InputArea';
import {JsonView} from './JsonView';
import {IViewState, ActionDispatcher} from './module';
import PortfolioPageOutline from '../PortfolioPageOutline';
import {RegisterArea} from './RegisterArea';

interface IViewProps {
  value: IViewState;
  actions: ActionDispatcher;
}

// ステートは Redux 管理とし、IViewState プロパティとして受け取る
// 動作も ActionDispatcher で差し込む
export const View = (props: IViewProps) => (
  <PortfolioPageOutline
    title="AWS サンプル01"
    link={{
      href: 'https://www.microsoft.com/cognitive-services/en-us/bing-web-search-api',
      title: 'Microsoft Cognitive Services - Bing Web Search API'
    }}
    desc="バックエンドの AWS(ApiGateway + Lambda + DynamoDB) と通信するサンプルです。参考リンクのようなイメージです"
  >
    <RegisterArea
      onChange={ props.actions.handleOnChangeForRegister() }
      onTouchTap={ props.actions.handleTouchTapForRegister(props.value.inputForRegister) }
      input={ props.value.inputForRegister }
    />
    <hr />
    <InputArea
      onChange={ props.actions.handleOnChange() }
      onTouchTap={ props.actions.handleTouchTap(props.value.input) }
    />
    <Tabs>
      <Tab label="JSON">
        <JsonView recipes={props.value.jsonResult.recipes}/>
      </Tab>
      <Tab label="Preview">
        <div>
          プレビューデータ
        </div>
      </Tab>
    </Tabs>
  </PortfolioPageOutline>
);

export default View;
