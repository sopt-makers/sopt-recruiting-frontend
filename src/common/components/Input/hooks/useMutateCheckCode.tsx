import { useMutation } from '@tanstack/react-query';
import { useFormContext } from 'react-hook-form';

import { VALIDATION_CHECK } from '@constants/validationCheck';

import { checkVerificationCode } from '../apis';

import type { CheckVerificationCodeRequest, EmailResponse } from '../types';
import type { CustomError } from '@apis/instance';

interface MutateCheckCodeProps {
  onSuccess: () => void;
}

const useMutateCheckCode = ({ onSuccess }: MutateCheckCodeProps) => {
  const { setError } = useFormContext();

  const { mutate: checkVerificationCodeMutate, isPending: checkVerificationCodeIsPending } = useMutation<
    EmailResponse,
    CustomError,
    CheckVerificationCodeRequest
  >({
    mutationFn: ({ email, code }: CheckVerificationCodeRequest) => checkVerificationCode(email, code),
    onSuccess,
    onError(error) {
      if (error.status === 400) {
        setError('code', {
          type: 'not-match',
          message: VALIDATION_CHECK.verificationCode.errorText,
        });
      }
    },
  });

  return { checkVerificationCodeMutate, checkVerificationCodeIsPending };
};

export default useMutateCheckCode;
