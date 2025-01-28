import createClient from 'openapi-fetch';
import { paths } from './api-schema';

export const fetcher = createClient<paths>({ baseUrl: import.meta.env.VITE_BASE_URL });
