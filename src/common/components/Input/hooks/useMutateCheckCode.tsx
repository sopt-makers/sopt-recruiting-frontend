import { useMutation } from '@tanstack/react-query';
import { useFormContext } from 'react-hook-form';

import { VALIDATION_CHECK } from '@constants/validationCheck';

import { checkVerificationCode } from '../apis';

import type { CheckVerificationCodeRequest, EmailResponse } from '../types';
import type { ErrorResponse } from '@type/errorResponse';
import type { AxiosError, AxiosResponse } from 'axios';

interface MutateCheckCodeProps {
  onChangeVerification: (bool: boolean) => void;
  onSetActive: () => void;
}

const useMutateCheckCode = ({ onChangeVerification, onSetActive }: MutateCheckCodeProps) => {
  const { setError } = useFormContext();

  const { mutate: checkVerificationCodeMutate, isPending: checkVerificationCodeIsPending } = useMutation<
    AxiosResponse<EmailResponse, CheckVerificationCodeRequest>,
    AxiosError<ErrorResponse, CheckVerificationCodeRequest>,
    CheckVerificationCodeRequest
  >({
    mutationFn: ({ email, code }: CheckVerificationCodeRequest) => checkVerificationCode(email, code),
    onSuccess: () => {
      onSetActive();
      onChangeVerification(true);
    },
    onError(error) {
      if (error.response?.status === 400) {
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
