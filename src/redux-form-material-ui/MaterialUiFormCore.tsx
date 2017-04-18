import FlatButton from 'material-ui/FlatButton';
import { orange500 } from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';
import * as React from 'react';
import {Field, reduxForm} from 'redux-form/immutable';
import asyncValidate from './asyncValidate';
import validate from './validate';
import warn from './warning';

// FIXME ホントは型を記述したいが、interface 内での ...custom の書き方が不明
const renderTextField = ({input, label, meta: {touched, error, warning}, ...custom}) => (
  <TextField hintText={ label }
             floatingLabelText={ label }
             errorText={ touched && error || touched && warning }
             errorStyle={ warning && styles.warningStyle}
             {...input}
             {...custom /* multiLine や rows を指定したければ */}
  />
);

interface IFormProps {
  handleSubmit: () => void;
  pristine: boolean;  // 初期状態
  reset: () => void;
  submitting: boolean;  // 送信中
}

export const MaterialUiFormCore = (props: IFormProps) => (
  <form onSubmit={ props.handleSubmit }>
    <div>
      <Field name="firstName" component={ renderTextField } label="名"/>
    </div>
    <div>
      <Field name="lastName" component={ renderTextField } label="姓"/>
    </div>
    <div>
      <Field name="email" component={ renderTextField } label="email" />
      <span style={ styles.annotation }>(foo@foo.com', 'bar@bar.com 以外のアドレスを入力すると非同期で確認し3秒後にエラー表示します)</span>
    </div>
    <div>
      <Field name="notes" component={ renderTextField } label="メモ" multiLine={true} rows={2}/>
      <span style={ styles.annotation }>(9文字以下だと警告が出ますがバリデーションと違い修正しなくても送信可能)</span>
      <span style={ styles.annotation }>(16文字以上だとバリデーションエラーで送信不可)</span>
    </div>
    <div>
      <FlatButton disabled={ props.pristine || props.submitting } type="submit">送信</FlatButton>
      <FlatButton disabled={ props.pristine || props.submitting } type="button"
                  onTouchTap={ props.reset }>クリア</FlatButton>
    </div>
  </form>
);

const styles = {
  annotation: {
    display: 'block',
  },
  button: {
    backgroundColor: '#ffcc80',
    margin: '2px',
  },
  warningStyle: {
    color: orange500, /* import しておく */
  },
};

export default reduxForm({
  form: 'materialuiExample',
  warn,
  validate,
  asyncValidate,
})(MaterialUiFormCore);

