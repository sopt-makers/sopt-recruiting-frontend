import { FieldValues, UseFormWatch } from 'react-hook-form';

import { VALIDATION_CHECK } from '@constants/validationCheck';

export const validatePasswordConfirmation = (watch: UseFormWatch<FieldValues>, name: string) => (val: FieldValues) => {
  if (watch(name) !== val) {
    return VALIDATION_CHECK.passwordConfirm.errorText;
  }
};

export const validateEmailConfirmation = (watch: UseFormWatch<FieldValues>, name: string) => (val: FieldValues) => {
  if (watch(name) !== val) {
    return VALIDATION_CHECK.emailConfirm.errorText;
  }
};
