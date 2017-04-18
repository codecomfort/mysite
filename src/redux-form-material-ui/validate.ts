import * as Im from 'immutable';

const validate = (values: Im.Map<string, any>) => {
  const errors = {
    notes: '',
  };

  if (!values.get('notes')) {
    errors.notes = '必須です';
  } else if (values.get('notes').length > 15) {
    errors.notes = '15 文字以下で入力してください';
  }

  return errors;
};

export default validate;
