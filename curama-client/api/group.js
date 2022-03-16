import api from './api';

export default {
  get: async () => api.axios.get(`/groups/`),
  getById: async id => api.axios.get(`/groups/${id}`),
  create: async params => api.axios.post(`/groups/`, params),
  update: async params => api.axios.put(`/groups/${params.id}`, params),
  remove: async id => api.axios.delete(`/groups/${id}`)
};
