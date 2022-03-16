import api from './api';

export default {
  get: async () => api.axios.get(`/estates/`),
  getById: async id => api.axios.get(`/estates/${id}`),
  create: async params => api.axios.post(`/estates/`, params),
  update: async params => api.axios.put(`/estates/${params.id}`, params),
  remove: async id => api.axios.delete(`/estates/${id}`)
};
