import * as React from 'react';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import {Tabs, Tab} from 'material-ui/Tabs';
import {StatelessComponent} from 'react';
const isNullOrUndefined = require('is-nil');

interface Recipe {
  'key1': string;
  'key2': string;
}

interface View2Props {
}

interface View2States {
  input: string;
  jsonResult: {
    httpStatus: string;
    recipes: Recipe[];
  }
}

const styles = {
  textFieldStyles: {
    fontSize: 20
  },
  iconStyles: {
    fontSize: '36px'
  }
};
export default class View2 extends React.Component<View2Props, View2States> {
  constructor() {
    super();
    this.state = {
      input: '',
      jsonResult: {
        httpStatus: '',
        recipes: []
      }
    }
  }

  private getRecipes(word: string): Recipe[] {

    // 実際には WebApi から取得して返す
    const sampleRecipes = [
      {
        'key1': 'val1',
        'key2': 'val2'
      },
      {
        'key1': 'val3',
        'key2': 'val4'
      },
      {
        'key1': 'val5',
        'key2': 'val6'
      },
    ];
    return sampleRecipes.filter(val => val.key1 === word);
  }

  handleTouchTap = (e: object) => {
    const {input} = this.state;
    if (isNullOrUndefined(input) || input === '') {
      alert('検索語を入れてください');
      return;
    }

    const recipes = this.getRecipes(input);
    if (recipes.length === 0) {
      alert('該当なし');
      return;
    }

    this.setState({
      jsonResult: {
        httpStatus: '200',
        recipes: recipes
      }
    });
  };

  render() {
    const {} = this.props;
    const {jsonResult} = this.state;

    const notFoundTab = <div>データが存在しません</div>;
    const foundTab = (val: string) => <div>{val}</div>;
    return <div>
      <h2>AWS サンプル01</h2>
      <div>
        <TextField
          style={styles.textFieldStyles}
          hintText="レシピ名"
          onChange={ (e: object, newValue: string) => this.setState({input: newValue})}
        />
        <IconButton
          onTouchTap={ this.handleTouchTap }>
          <i className="material-icons"
             style={styles.iconStyles}>
            search
          </i>
        </IconButton>
      </div>
      <Tabs>
        <Tab label="JSON">
          {
            isNullOrUndefined(jsonResult.recipes) || jsonResult.recipes.length === 0
              ? notFoundTab
              : foundTab(jsonResult.recipes[0].key2)
          }
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
