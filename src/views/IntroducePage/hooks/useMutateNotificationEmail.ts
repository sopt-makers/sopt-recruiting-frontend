import { useMutation } from '@tanstack/react-query';
import { ErrorResponse } from '@type/errorResponse';
import { AxiosError, AxiosResponse } from 'axios';
import { postNotificationEmail } from 'views/IntroducePage/apis';
import { PostNotificationEmailRequest, PostNotificationEmailResponse } from 'views/IntroducePage/types';

const useMutateNotificationEmail = () => {
  const { mutate } = useMutation<
    AxiosResponse<PostNotificationEmailResponse, PostNotificationEmailRequest>,
    AxiosError<ErrorResponse, PostNotificationEmailRequest>,
    PostNotificationEmailRequest
  >({
    mutationFn: ({ email, generation }) => postNotificationEmail(email, generation),
  });

  return { mutate };
};

export default useMutateNotificationEmail;
