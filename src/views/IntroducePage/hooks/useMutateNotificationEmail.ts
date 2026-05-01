import { useMutation } from '@tanstack/react-query';
import { postNotificationEmail } from 'views/IntroducePage/apis';
import { PostNotificationEmailRequest } from 'views/IntroducePage/types';

const useMutateNotificationEmail = () => {
  return useMutation({
    mutationFn: ({ email, generation }: PostNotificationEmailRequest) => postNotificationEmail(email, generation),
  });
};

export default useMutateNotificationEmail;
