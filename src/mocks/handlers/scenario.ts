import { HttpResponse, http } from 'msw';

import { buildMyInfo } from '../scenario/buildMyInfo';
import { buildSeason } from '../scenario/buildSeason';
import { getScenario } from '../scenario/state';

export { getScenario, resetScenario, setScenario } from '../scenario/state';

export const scenarioHandlers = [
  http.get('*/latest', () => {
    return HttpResponse.json({
      err: false,
      season: buildSeason(getScenario()),
    });
  }),
  http.get('*/my', () => {
    return HttpResponse.json(buildMyInfo(getScenario()));
  }),
];
