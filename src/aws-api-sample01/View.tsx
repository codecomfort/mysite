import * as React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import {InputArea} from './InputArea';
import {JsonView} from './JsonView';
const isNullOrUndefined = require('is-nil');

export interface Recipe {
  'id': number;
  'key1': string;
  'key2': string;
}

interface ViewProps {
}

interface ViewStates {
  input: string;
  jsonResult: {
    httpStatus: string;
    recipes: Recipe[];
  }
}

export default class View extends React.Component<ViewProps, ViewStates> {
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
        'id': 1,
        'key1': 'a',
        'key2': 'a-1'
      },
      {
        'id': 2,
        'key1': 'a',
        'key2': 'a-2'
      },
      {
        'id': 3,
        'key1': 'a',
        'key2': 'a-3'
      },
      {
        'id': 4,
        'key1': 'b',
        'key2': 'b-1'
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
      this.setState({
        jsonResult: {
          httpStatus: '200',
          recipes: []
        }
      });
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

    return <div>
      <h2>AWS サンプル01</h2>
      <InputArea
        onChange={ (e: object, newValue: string) => this.setState({input: newValue}) }
        onTouchTap={ this.handleTouchTap }
      />
      <Tabs>
        <Tab label="JSON">
          <JsonView recipes={jsonResult.recipes}/>
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



