import apiService from '../utils/apiService';

export const useApi = () => {
  const get = async (endpoint: string, headers = {}) => {
    return apiService(endpoint, { method: 'GET', headers });
  };

  const post = async (endpoint: string, data: any, headers = {}) => {
    return apiService(endpoint, { method: 'POST', data, headers });
  };

  const put = async (endpoint: string, data: any, headers = {}) => {
    return apiService(endpoint, { method: 'PUT', data, headers });
  };

  const del = async (endpoint: string, headers = {}) => {
    return apiService(endpoint, { method: 'DELETE', headers });
  };

  const upload = async (endpoint: string, formData: FormData, headers = {}) => {
    return apiService(endpoint, { method: 'POST', data: formData, headers });
  };

  return {
    get,
    post,
    put,
    delete: del,
    upload,
  };
}; 