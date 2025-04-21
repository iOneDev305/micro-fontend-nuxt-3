export const handleResponse = ({ status, data }) => {
  if (status >= 200 && status < 300) {
    return {
      success: true,
      data,
      error: null,
    };
  }

  const error = {
    status,
    message: data?.message || 'An error occurred',
    details: data?.details || null,
  };

  return {
    success: false,
    data: null,
    error,
  };
}; 