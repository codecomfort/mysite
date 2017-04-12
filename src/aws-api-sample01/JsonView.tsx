import * as React from 'react';
import {isNullOrUndefined} from 'util';
import {Recipe} from './module';

interface IRecipes {
  recipes: Recipe[];
}
export const JsonView = (props: IRecipes) => isNullOrUndefined(props.recipes) || props.recipes.length === 0
  ? <NotFound/>
  : <Found recipes={props.recipes}/>;

const NotFound = () => <div>
  データが存在しません
</div>;

const Found = (props: IRecipes) => <ul>
  {props.recipes.map( (recipe) => <li key={recipe.id}>{recipe.key2}</li>)}
</ul>;

export default JsonView;
