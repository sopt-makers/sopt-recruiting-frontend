import { FieldValues, UseFormWatch } from 'react-hook-form';

import { VALIDATION_CHECK } from '@constants/validationCheck';

export const validatePasswordConfirmation =
  (watch: UseFormWatch<FieldValues>, textVar: string) => (val: FieldValues) => {
    if (watch(textVar) !== val) {
      return VALIDATION_CHECK.passwordConfirm.errorText;
    }
  };
