import axios from 'axios'
axios.interceptors.request.use(function (config) {
    return config;
  });
axios.interceptors.response.use(
    response => response.data,
    error => Promise.reject(error)
)
export default axios