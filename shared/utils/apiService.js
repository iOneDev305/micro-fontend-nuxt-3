import { handleResponse } from './apiResponseHandler';

const apiService = async (endpoint, options = {}) => {
  const { method = 'GET', data = null, headers = {} } = options;
  const url = `/api${endpoint}`;

  const defaultHeaders = {
    ...(method === 'GET' || !data ? { 'Content-Type': 'application/json' } : {}),
  };

  const config = useRuntimeConfig();
  if (config.public.API_KEY) {
    defaultHeaders['X-API-Key'] = config.public.API_KEY;
  }

  const requestOptions = {
    method,
    headers: {
      ...defaultHeaders,
      ...headers,
    },
  };

  if (data) {
    if (data instanceof FormData) {
      delete requestOptions.headers['Content-Type'];
      requestOptions.body = data;
    } else {
      requestOptions.body = JSON.stringify(data);
    }
  }

  try {
    const response = await fetch(url, requestOptions);
    const contentType = response.headers.get('Content-Type');
    let responseData;

    if (contentType?.includes('application/json')) {
      responseData = await response.json();
    } else if (contentType?.includes('application/octet-stream')) {
      responseData = await response.blob();
    } else {
      responseData = await response.text();
    }

    return handleResponse({
      status: response.status,
      data: responseData,
    });
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

export default apiService; 