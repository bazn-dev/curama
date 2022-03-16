import api from './api';

export default {
  get: async () => api.axios.get(`/users/`),
  getById: async id => api.axios.get(`/user/${id}`),
  create: async params => api.axios.post(`/users/`, params),
  update: async params => api.axios.put(`/users/${params.id}`, params),
  remove: async id => api.axios.delete(`/users/${id}`)
};
