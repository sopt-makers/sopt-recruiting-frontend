const baseURL = import.meta.env.VITE_BASE_URL;

type StandardHeaders = 'Content-Type' | 'Authorization' | 'Accept' | 'Cache-Control' | 'User-Agent';
type RequestMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export class CustomError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

interface FetchOptions extends Omit<RequestInit, 'body'> {
  method?: RequestMethod;
  headers?: Record<StandardHeaders, string>;
  body?: Record<string, unknown>;
  params?: Record<string, any>;
}

const instance = async (url: string, options: FetchOptions = {}) => {
  const { body, params, headers, ...rest } = options;
  const urlWithParams = params ? `${url}?${new URLSearchParams(params).toString()}` : url;

  const response = await fetch(`${baseURL}${urlWithParams}`, {
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: JSON.stringify(body),
    ...rest,
  });

  if (!response.ok) {
    const errMsg = await response.json();
    throw new CustomError(errMsg.userMessage, response.status);
  }

  return response.json();
};

export default instance;
