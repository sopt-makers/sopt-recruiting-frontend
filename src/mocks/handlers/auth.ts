import { HttpResponse, http } from 'msw';

export const authHandlers = [
  http.post('*/login', () => {
    return HttpResponse.json({
      err: false,
      token: 'test',
    });
  }),
];
