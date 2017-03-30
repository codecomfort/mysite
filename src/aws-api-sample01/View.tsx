import * as React from 'react';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import {Tabs, Tab} from 'material-ui/Tabs';
import {StatelessComponent} from 'react';
const isNullOrUndefined = require('is-nil');

interface Recipe {
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

const styles = {
  textFieldStyles: {
    fontSize: 20
  },
  iconStyles: {
    fontSize: '36px'
  }
};
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
          <JsonDiv recipes={jsonResult.recipes}/>
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
interface IRecipes {
  recipes: Recipe[]
}
const JsonDiv: StatelessComponent<IRecipes> = (props) => isNullOrUndefined(props.recipes) || props.recipes.length === 0
  ? <NotFound/>
  : <Found recipes={props.recipes}/>;
const NotFound = () => <div>
  データが存在しません
</div>;
const Found: StatelessComponent<IRecipes> = (props) => <ul>
  {props.recipes.map(recipe => <li key={recipe.id}>{recipe.key2}</li>)}
</ul>;


// 先頭が大文字で、引数が1つで、型を指定しないと関数コンポーネント扱いぽい。なお、以下のように、引き数名は props に限らない
//const TestComponent = (propsaa) => <div>ステートレスコンポーネント？{propsaa.name}</div>;
// TypeScript では型指定が必要になるが、単純に型指定するとコンパイルが通らない
//const TestComponent2 = (name: string) => <div>ステートレスコンポーネント２{name}</div>;
// 以下の書き方で型指定できる。
// interface ITest {
//  name: string;
// }
//const TestComponent2: StatelessComponent<ITest> = (props) => <div>ステートレスコンポーネント２{props.name}</div>;

