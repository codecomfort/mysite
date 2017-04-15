import MuiMenu from 'material-ui/Menu';
import MuiMenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import * as React from 'react';
import {Col, Container, Row} from 'react-grid-system';
import {Link, Route} from 'react-router-dom';
import AwsSample01 from './aws-api-sample01/Root';
import Counter from './counter/Root';
import './Portfolio.css';
import TicTacToe from './react-tutorial-tictactoe/TicTacToe';
import ImmutableForm from './redux-form-field-validation/ImmutableForm';

const Portfolio = () => (
  <div className="Portfolio-area">
    <Route path="/portfolio/counter" component={ Counter }/>
    <Route path="/portfolio/react-tutorial-tictactoe" component={ TicTacToe }/>
    <Route path="/portfolio/aws-api-sample01" component={ AwsSample01 }/>
    {/* FIXME component プロパティで、ダイレクトに onSubmit の書き方がわからない
     下のように render を使えばそれっぽく書けるが、render で書くと component で書いた場合と機能が違うので
      完全な代替にはならない */}
    <Route path="/portfolio/redux-form-field-validation" component={ Form }/>
    {/*<Route path="/portfolio/redux-form-field-validation" render={ () => <ImmutableForm onSubmit={ showResults} />}/>*/}
  </div>
);

const Form = () => <ImmutableForm onSubmit={ showResults }/>;

const showResults = (values) => {
  alert(values);
};

export default Portfolio;
