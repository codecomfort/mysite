import * as Im from 'immutable';

const warn = (values: Im.Map<string, any>) => {
  const warnings = {
    notes: '',
  };

  const notes = values.get('notes');
  if (notes && notes.length < 10) {
    warnings.notes = '10文字以上が望ましいです';
  }

  return warnings;
};

export default warn;
