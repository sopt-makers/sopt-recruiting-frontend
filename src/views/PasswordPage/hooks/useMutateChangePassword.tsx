import { useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';

import { sendPasswordChange } from '../apis';

import type { PasswordError, PasswordRequest, PasswordResponse } from '../types';

const useMutateChangePassword = () => {
  const navigate = useNavigate();

  const { mutate: changePasswordMutate, isPending: changePasswordIsPending } = useMutation<
    AxiosResponse<PasswordResponse, PasswordRequest>,
    AxiosError<PasswordError, PasswordRequest>,
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
