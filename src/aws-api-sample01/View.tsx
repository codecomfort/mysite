import * as React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import {InputArea} from './InputArea';
import {JsonView} from './JsonView';
import {ViewState, ActionDispatcher} from './module';
import {StatelessComponent} from 'react';

interface ViewProps {
  value: ViewState;
  actions: ActionDispatcher;
}

// ステートは Redux 管理とし、ViewState プロパティとして受け取る
// 動作も ActionDispatcher で差し込む
export const View: StatelessComponent<ViewProps> = (props) => <div>
  <h2>AWS サンプル01</h2>
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
  </Tabs>;
</div>;

export default View;
