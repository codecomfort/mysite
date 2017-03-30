import * as React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import {InputArea} from './InputArea';
import {JsonView} from './JsonView';
import {ViewState, ActionDispatcher} from './module';

interface ViewProps {
  value: ViewState;
  actions: ActionDispatcher;
}

// ステートは Redux 管理とし、ViewState プロパティとして受け取る
// 動作も ActionDispatcher で差し込む
// →こうすることで、このコンポーネントは SFC にできる
export default class View extends React.Component<ViewProps, {}> {
  render() {
    const {value, actions} = this.props;

    return <div>
      <h2>AWS サンプル01</h2>
      <InputArea
        onChange={ actions.handleOnChange() }
        onTouchTap={ actions.handleTouchTap(value.input) }
      />
      <Tabs>
        <Tab label="JSON">
          <JsonView recipes={value.jsonResult.recipes}/>
        </Tab>
        <Tab label="Preview">
          <div>
            プレビューデータ
          </div>
        </Tab>
      </Tabs>;
    </div>
  }
}


