type FetchOptions = RequestInit & {
  params?: Record<string, string>;
};

export async function apiClient<T>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<T> {
  const { params, headers, ...customConfig } = options;
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || '';

  const queryString = params ? `?${new URLSearchParams(params)}` : '';
  const config: RequestInit = {
    method: options.method || 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    ...customConfig,
  };

  const response = await fetch(`${baseUrl}${endpoint}${queryString}`, config);

  if (!response.ok) {
    throw new Error(`API Error: ${response.statusText}`);
  }

  return response.json() as Promise<T>;
}