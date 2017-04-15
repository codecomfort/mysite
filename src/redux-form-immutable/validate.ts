import * as Im from 'immutable';

interface IValitationErros {
  age: string;
  email: string;
  username: string;
}

// redux-form/immutable の reducer を使った場合、values はプレーンオブジェクトではなく
// Immutable.Map 型で渡ってくる
const validate = (values: Im.Map<string, any>): IValitationErros => {
  const errors: IValitationErros = {
    age: '',
    email: '',
    username: '',
  };
  const suffix: string = '(Client Validation)';

  if (!values.get('username')) {
    errors.username = '必須です' + suffix;
  } else if (values.get('username').length > 15) {
    errors.username = '15 文字以下で入力してください' + suffix;
  }

  if (!values.get('email')) {
    errors.email = '必須です' + suffix;
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.get('email'))) {
    errors.email = '妥当なメールアドレスを入力してください' + suffix;
  }

  if (!values.get('age')) {
    errors.age = '必須です' + suffix;
  } else if (isNaN(Number(values.get('age')))) {
    errors.age = '数値を入力してください' + suffix;
  } else if (Number(values.get('age')) < 18) {
    errors.age = '18 才以下はご遠慮ください' + suffix;
  }

  return errors;
};

export default validate;
