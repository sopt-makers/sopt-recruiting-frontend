import { useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';

import { sendPasswordChange } from '../apis';

import type { PasswordRequest, PasswordResponse } from '../types';
import type { ErrorResponse } from '@type/errorResponse';

const useMutateChangePassword = () => {
  const navigate = useNavigate();

  const { mutate: changePasswordMutate, isPending: changePasswordIsPending } = useMutation<
    AxiosResponse<PasswordResponse, PasswordRequest>,
    AxiosError<ErrorResponse, PasswordRequest>,
    PasswordRequest
  >({
    mutationFn: (userInfo: PasswordRequest) => sendPasswordChange(userInfo),
    onSuccess: () => {
      navigate('/');
    },
  });

  return { changePasswordMutate, changePasswordIsPending };
};

export default useMutateChangePassword;
