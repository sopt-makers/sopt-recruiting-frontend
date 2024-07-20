import { useMutation } from '@tanstack/react-query';
import { useFormContext } from 'react-hook-form';

import { VALIDATION_CHECK } from '@constants/validationCheck';

import { checkUser } from '../apis';

import type { CheckUserRequest, EmailResponse } from '../types';
import type { ErrorResponse } from '@type/errorResponse';
import type { AxiosError, AxiosResponse } from 'axios';

interface MutateCheckUserProps {
  onSendCode: () => void;
}

const useMutateCheckUser = ({ onSendCode }: MutateCheckUserProps) => {
  const { clearErrors, setError } = useFormContext();

  const { mutate: checkUserMutate, isPending: checkUserIsPending } = useMutation<
    AxiosResponse<EmailResponse, CheckUserRequest>,
    AxiosError<ErrorResponse, CheckUserRequest>,
    CheckUserRequest
  >({
    mutationFn: (userInfo: CheckUserRequest) => checkUser(userInfo),
    onSuccess: () => {
      clearErrors();
      onSendCode();
    },
    onError: (error) => {
      if (error.response?.status === 400 || error.response?.status === 403) {
        setError('name', {
          type: 'non-existence',
          message: VALIDATION_CHECK.name.errorTextNonexistence,
        });
        setError('email', {
          type: 'non-existence',
          message: VALIDATION_CHECK.email.errorTextNonexistence,
        });
      }
    },
  });

  return { checkUserMutate, checkUserIsPending };
};

export default useMutateCheckUser;
