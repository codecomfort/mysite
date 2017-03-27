import * as React from 'react';
import TextField from 'material-ui/TextField';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import {Tabs, Tab} from 'material-ui/Tabs';
interface Props {
  json: object;
}

const styles = {
  textFieldStyles: {
    fontSize: 20
  },
  iconStyles: {
    fontSize: '36px'
  }
};

const View = (props: Props) => (
  <div>
    <h2>AWS サンプル01</h2>
    <div>
      <TextField
        style={styles.textFieldStyles}
        hintText="レシピ名"
      />
      <IconButton>
        <i className="material-icons"
           style={styles.iconStyles}>
          search
        </i>
      </IconButton>
    </div>
    <Tabs>
      <Tab label="Preview">
        <div>
          プレビューデータ
        </div>
      </Tab>
      <Tab label="JSON">
        <div>
          JSON データ
        </div>
      </Tab>
    </Tabs>
  </div>
);

export default View;
