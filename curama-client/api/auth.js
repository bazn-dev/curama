import api from './api';

export default {
  logIn: async params => api.axios.post(`/login`, params)
};
