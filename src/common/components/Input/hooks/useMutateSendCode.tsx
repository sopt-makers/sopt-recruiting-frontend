import { useMutation } from '@tanstack/react-query';
import { useFormContext } from 'react-hook-form';

import { VALIDATION_CHECK } from '@constants/validationCheck';

import { sendVerificationCode } from '../apis';

import type { EmailResponse, SendVerificationCodeRequest } from '../types';
import type { ErrorResponse } from '@type/errorResponse';
import type { AxiosError, AxiosResponse } from 'axios';

interface MutateSendCodeProps {
  onChangeVerification: (bool: boolean) => void;
  onSetTimer: () => void;
}

const useMutateSendCode = ({ onChangeVerification, onSetTimer }: MutateSendCodeProps) => {
  const { setError } = useFormContext();

  const { mutate: sendVerificationCodeMutate, isPending: sendVerificationCodeIsPending } = useMutation<
    AxiosResponse<EmailResponse, SendVerificationCodeRequest>,
    AxiosError<ErrorResponse, SendVerificationCodeRequest>,
    SendVerificationCodeRequest
  >({
    mutationFn: ({ email, season, group, isSignup }: SendVerificationCodeRequest) =>
      sendVerificationCode(email, season, group, isSignup),
    onSuccess: () => {
      onChangeVerification(false);
      onSetTimer();
    },
    onError: (error) => {
      if (error.response?.status === 400 || error.response?.status === 403) {
        setError('email', {
          type: 'already-existence',
          message: VALIDATION_CHECK.email.errorTextExistence,
        });
      }
    },
  });

  return { sendVerificationCodeMutate, sendVerificationCodeIsPending };
};

export default useMutateSendCode;
