import { useMutation } from '@tanstack/react-query';

import { sendPasswordChange } from '../apis';

import type { PasswordRequest, PasswordResponse } from '../types';
import type { CustomError } from '@apis/instance';

interface MutateChangePasswordProps {
  onSuccess: () => void;
}

const useMutateChangePassword = ({ onSuccess }: MutateChangePasswordProps) => {
  const { mutate: changePasswordMutate, isPending: changePasswordIsPending } = useMutation<
    PasswordResponse,
    CustomError,
    PasswordRequest
  >({
    mutationFn: (userInfo: PasswordRequest) => sendPasswordChange(userInfo),
    onSuccess,
  });

  return { changePasswordMutate, changePasswordIsPending };
};

export default useMutateChangePassword;
