import { useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';

import { sendPasswordChange } from '../apis';

import type { PasswordRequest, PasswordResponse } from '../types';
import type { ErrorResponse } from '@type/errorResponse';

interface MutateChangePasswordProps {
  onSuccess: () => void;
}

const useMutateChangePassword = ({ onSuccess }: MutateChangePasswordProps) => {
  const { mutate: changePasswordMutate, isPending: changePasswordIsPending } = useMutation<
    AxiosResponse<PasswordResponse, PasswordRequest>,
    AxiosError<ErrorResponse, PasswordRequest>,
    PasswordRequest
  >({
    mutationFn: (userInfo: PasswordRequest) => sendPasswordChange(userInfo),
    onSuccess,
  });

  return { changePasswordMutate, changePasswordIsPending };
};

export default useMutateChangePassword;
