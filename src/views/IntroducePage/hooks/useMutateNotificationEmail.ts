import { useMutation } from '@tanstack/react-query';
import { postNotificationEmail } from 'views/IntroducePage/apis';

import type { CustomError } from '@apis/fetcher';
import type {
  PostNotificationEmailRequest,
  PostNotificationEmailResponse,
} from 'views/IntroducePage/types';

const useMutateNotificationEmail = () => {
  return useMutation<
    PostNotificationEmailResponse,
    CustomError,
    PostNotificationEmailRequest
  >({
    mutationFn: ({ email, generation }: PostNotificationEmailRequest) =>
      postNotificationEmail(email, generation),
  });
};

export default useMutateNotificationEmail;
