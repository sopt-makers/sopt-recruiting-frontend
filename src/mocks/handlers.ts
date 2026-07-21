import { authHandlers } from './handlers/auth';
import { scenarioHandlers } from './handlers/scenario';

export const handlers = [...scenarioHandlers, ...authHandlers];
