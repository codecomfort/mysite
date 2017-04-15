const validate = (values: any) => {
  const errors: any = {};
  if (!values.get('username')) {
    errors.username = 'Required';
  } else if (values.get('username').length > 15) {
    errors.username = 'Must be 15 characters or less';
  }
  return errors;
};

export default validate;
