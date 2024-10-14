// frontend/src/services/apiService.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: '/i_api',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default {
  getApis() {
    return apiClient.get('/api');
  },

  saveApi(api) {
    if (api.id) {
      return apiClient.put(`/api/${api.id}`, api);
    } else {
      return apiClient.post('/api', api);
    }
  },

  deleteApi(id) {
    return apiClient.delete(`/api/${id}`);
  },

  bindProperty(apiId, apiPropertyId) {
    return apiClient.post(`/api/bind`, {apiId, apiPropertyId});
  },

  unbindProperty(apiId) {
    return apiClient.post(`/api/unbind`, {apiId });
  },

  // api properties

  getApiProperties() {
    return apiClient.get('/api-properties');
  },

  saveApiProperty(property) {
    if (property.id) {
      return apiClient.put(`/api-properties/${property.id}`, property);
    } else {
      return apiClient.post('/api-properties', property);
    }
  },

  deleteApiProperty(id) {
    return apiClient.delete(`/api-properties/${id}`);
  },

  dryrunApi(api) {
    const apiClient = axios.create({
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (api.method === 'GET') {
      return apiClient.get(api.url);

    } else if (api.method === 'POST') {
      return apiClient.post(api.url, api);

    } else if (api.method === 'PUT') {
      return apiClient.put(api.url, api);

    } else if (api.method === 'DELETE') {
      return apiClient.delete(api.url);
    }
  }
};