import * as Im from 'immutable';

interface IValitationErros {
  age: string;
  email: string;
  username: string;
}

const asyncValidate = async (values: Im.Map<string, any>) => {
  const email = values.get('email');
  // FIXME 空のままフォーカスを外した場合はチェックしたくない
  await validateEmail(email);
};

const sleep = (ms: number): Promise<void> => new Promise<void>((resolve) => setTimeout(resolve, ms));

const validateEmail = async (email) => {
  await sleep(3000); // メールアドレスの存在確認に時間がかかるエミュレート
  if (!['foo@foo.com', 'bar@bar.com'].includes(email)) {
    // Async Validation の場合、Sync Validation のように
    // errors をリターンするのでは無く、throw で通知する
    throw {
      email: '登録されていないアドレスです',
    };
  }
};

export default asyncValidate;
