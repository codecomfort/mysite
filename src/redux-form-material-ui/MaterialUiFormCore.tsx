import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import * as React from 'react';
import {Field, reduxForm} from 'redux-form/immutable';

// FIXME ホントは型を記述したいが、interface 内での ...custom の書き方が不明
const renderTextField = ({input, label, meta: {touched, error}, ...custom}) => (
  <TextField hintText={ label }
             floatingLabelText={ label }
             errorText={ touched && error }
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
      <Field name="notes" component={ renderTextField } label="メモ" multiLine={true} rows={2}/>
    </div>
    <div>
      <FlatButton disabled={ props.pristine || props.submitting } type="submit">送信</FlatButton>
      <FlatButton disabled={ props.pristine || props.submitting } type="button"
                  onTouchTap={ props.reset }>クリア</FlatButton>
    </div>
  </form>
);

const styles = {
  button: {
    backgroundColor: '#ffcc80',
    margin: '2px',
  },
};

export default reduxForm({
  form: 'materialuiExample',
})(MaterialUiFormCore);

