import * as React from 'react';
import ImmutableForm from './ImmutableForm';

export const ImmutableFormView = () => (
  <div>
    <div className="sample-info">
      <h2>Redux Form Immutable サンプル</h2>
      <p>ポイント：Redux ステートを Immutable にして実装したもの。使用する側には特に関係ありません。</p>
      <a href="http://redux-form.com/6.0.0-alpha.4/examples/immutable/" target="_blank">参考：Immutable JS Example - Redux
        Form</a>
    </div>
    <br />
    <ImmutableForm onSubmit={ showResults }/>
  </div>
);

const showResults = (values) => {
  alert(values);
};

export default ImmutableFormView;

