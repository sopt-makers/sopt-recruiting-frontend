type StandardHeaders = 'Content-Type' | 'Authorization' | 'Accept' | 'Cache-Control' | 'User-Agent';
type RequestMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export class CustomError<TData = unknown> extends Error {
  status: number;
  data?: TData;

  constructor(message: string, status: number, data?: TData) {
    super(message);
    this.status = status;
    this.data = data;
  }
}

interface FetchOptions extends Omit<RequestInit, 'body'> {
  method?: RequestMethod;
  headers?: Partial<Record<StandardHeaders, string>>;
  body?: Record<string, unknown>;
  params?: Record<string, any>;
}

const createFetcher =
  (baseURL: string) =>
  async (url: string, options: FetchOptions = {}) => {
    const { body, params, headers = {}, ...rest } = options;
    const urlWithParams = params ? `${url}?${new URLSearchParams(params).toString()}` : url;
    const isFormData = body instanceof FormData;

    if (!isFormData) {
      headers['Content-Type'] = 'application/json';
    }

    const response = await fetch(`${baseURL}${urlWithParams}`, {
      headers,
      body: isFormData ? body : JSON.stringify(body),
      ...rest,
    });

    if (!response.ok) {
      const text = await response.text();
      const fallbackMessage = `HTTP ${response.status} ${response.statusText}`;
      let errMsg: { userMessage?: string; data?: unknown } = {};

      try {
        errMsg = JSON.parse(text);
      } catch {
        errMsg = { userMessage: fallbackMessage };
      }
      throw new CustomError(errMsg.userMessage || fallbackMessage, response.status, errMsg.data);
    }

    return response.json();
  };

export const homepageFetcher = createFetcher(import.meta.env.VITE_OFFICIAL_WEB_BASE_URL);

const fetcher = createFetcher(import.meta.env.VITE_BASE_URL);
export default fetcher;
