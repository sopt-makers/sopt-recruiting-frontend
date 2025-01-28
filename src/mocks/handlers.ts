import { HttpResponse, http } from 'msw';

export const handlers = [
  http.get('*/latest', () => {
    return HttpResponse.json({
      err: false,
      season: {
        id: 16,
        season: 84,
        ybApplicationStart: '2024-09-08T01:00:00.000Z',
        ybApplicationEnd: '2024-09-13T09:00:00.000Z',
        ybApplicationConfirmStart: '2024-09-13T09:15:00.000Z',
        ybApplicationConfirmEnd: '2024-09-19T03:00:00.000Z',
        ybApplicationPassConfirmStart: '2024-09-19T07:00:00.000Z',
        ybApplicationPassConfirmEnd: '2024-09-20T15:00:00.000Z',
        ybFinalPassConfirmStart: '2024-09-25T07:00:00.000Z',
        ybFinalPassConfirmEnd: '2024-09-27T15:00:00.000Z',
        obApplicationStart: '2024-08-18T01:00:00.000Z',
        obApplicationEnd: '2024-08-21T09:00:00.000Z',
        obApplicationConfirmStart: '2024-08-21T09:15:00.000Z',
        obApplicationConfirmEnd: '2024-08-22T03:00:00.000Z',
        obApplicationPassConfirmStart: '2024-08-22T07:00:00.000Z',
        obApplicationPassConfirmEnd: '2024-08-23T15:00:00.000Z',
        obFinalPassConfirmStart: '2024-08-27T07:00:00.000Z',
        obFinalPassConfirmEnd: '2024-08-28T07:00:00.000Z',
        name: '숭숭 makers',
        obInterviewStart: '2024-08-23T23:00:00.000Z',
        obInterviewEnd: '2024-08-25T10:00:00.000Z',
        ybInterviewStart: '2024-09-21T00:00:00.000Z',
        ybInterviewEnd: '2024-09-22T10:30:00.000Z',
        isDeleted: false,
        createdAt: '2024-08-16T14:20:09.477Z',
        updatedAt: '2024-08-16T14:20:09.477Z',
        group: 'YB',
      },
    });
  }),
  http.post('*/login', () => {
    return HttpResponse.json({
      err: false,
      token: 'test',
    });
  }),
];
