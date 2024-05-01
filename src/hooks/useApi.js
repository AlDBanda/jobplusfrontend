import axios from 'axios';
export const useApi = () => {
  const request = async (endpoint, options) => {
    try {
    const res = await axios({
      method: options.method || 'GET',
      url: `http://localhost:1337/api/${endpoint}`,
      data: options.data || {},
      params: options.params || {},
    });
      options.onSuccess && options.onSuccess(res)
  } catch (err) {
    options.onFailure && options.onFailure(err)
  }
 };

 return {
  post: (endpoint, options) => request(endpoint, { ...options, method: 'POST' }),
 };
};