const baseURL = import.meta.env.VITE_BASE_URL;

interface FetchOptions extends RequestInit {
  headers?: Record<string, string>;
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
    throw new Error('network response가 도착하지 않았어요');
  }

  return response.json();
};

export default instance;
