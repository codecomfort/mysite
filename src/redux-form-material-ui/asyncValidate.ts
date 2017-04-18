import * as Im from 'immutable';

const asyncValidate = async (values: Im.Map<string, any>) => {
  const email = values.get('email');
  await validateEmail(email);
};

const sleep = (ms: number): Promise<void> => new Promise<void>((resolve) => setTimeout(resolve, ms));

const validateEmail = async (email) => {
  await sleep(3000); // メールアドレスの存在確認に時間がかかるエミュレート
  if (email && !['foo@foo.com', 'bar@bar.com'].includes(email)) {
    // Async Validation の場合、Sync Validation のように
    // errors をリターンするのでは無く、throw で通知する
    throw {
      email: '登録されていないアドレスです',
    };
  }

  return {};
};

export default asyncValidate;
