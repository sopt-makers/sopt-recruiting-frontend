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

interface FetchOptions extends RequestInit {
  method?: RequestMethod;
  headers?: Record<StandardHeaders, string>;
}

const instance = async (url: string, options: FetchOptions = {}) => {
  const response = await fetch(`${baseURL}${url}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  });

  if (!response.ok) {
    const errMsg = await response.json();
    throw new CustomError(errMsg.userMessage, response.status);
  }

  return response.json();
};

export default instance;
