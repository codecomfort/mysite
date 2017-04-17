import * as React from 'react';
import {Field, reduxForm} from 'redux-form/immutable';
import validate from './validate';

interface IFieldProps {
  // Field のドキュメントにあるとおり、props の input と meta は、redux-form によって値がセットされてくるもの
  // それ意外は開発者がセットしたとおりにパスされてくる
  input: any;
  label: string;
  type: string;
  meta: {
    touched: boolean,
    error: string;
  };
}

const RenderField = (props: IFieldProps) => {
  return (
    <div>
      <label>{props.label}</label>
      <div>
        <input {...props.input} type={props.type} placeholder={props.label}/>
        {props.meta.touched && props.meta.error && <span>{props.meta.error}</span>}
      </div>
    </div>
  );
}

interface IFormProps {
  // props のドキュメントにあるとおり、これらの項目は全て redux-form によりセットされる。
  // (末尾の reduxForm 関数かますことで実現)
  handleSubmit: () => void;
  pristine: boolean;  // 初期状態
  reset: () => void;
  submitting: boolean;  // 送信中
}

export const ImmutableFormCore = (props: IFormProps) => (
    <form onSubmit={props.handleSubmit}>
      {/* Field の属性のうち、name と component は必須、他は開発者任意 */}
      <Field name="username" type="text" component={ RenderField } label="Username"/>
      <Field name="email" type="email" component={ RenderField } label="Email"/>
      <span>(メールアドレス形式が不正な場合、送信ボタン押下のタイミングで、ブラウザによる警告も表示される場合があります)</span>
      <Field name="age" type="number" component={ RenderField } label="Age"/>
      <div>
        <button type="submit" disabled={props.submitting}>送信</button>
        <button type="button" disabled={props.pristine || props.submitting} onClick={props.reset}>クリア</button>
      </div>
    </form>
);

export default reduxForm({
  form: 'immutableExample',
  validate,
})(ImmutableFormCore);
