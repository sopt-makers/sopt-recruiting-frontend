import { track } from '@amplitude/analytics-browser';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { sendSignUp } from '../apis';

import type { SignUpRequest, SignUpResponse } from '../types';
import type { CustomError } from '@apis/instance';

interface MutateSignUpProps {
  onCheckExistence: () => void;
}

const useMutateSignUp = ({ onCheckExistence }: MutateSignUpProps) => {
  const navigate = useNavigate();

  const { mutate: signUpMutate, isPending: signUpIsPending } = useMutation<SignUpResponse, CustomError, SignUpRequest>({
    mutationFn: (userInfo: SignUpRequest) => sendSignUp(userInfo),
    onSuccess: () => {
      track('done-signup-apply');
      navigate('/');
    },
    onError: (error) => {
      if (error.status === 400) {
        onCheckExistence();
      }
    },
  });

  return { signUpMutate, signUpIsPending };
};

export default useMutateSignUp;
