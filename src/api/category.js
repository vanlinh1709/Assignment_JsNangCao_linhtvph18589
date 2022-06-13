import api from "./axios";
const prefix = '/category';

export const getCategories = () => api.get(`${prefix}`);
export const createCategory = (data) => api.post(`${prefix}`, data);
export const delCategory = (id) => api.delete(`${prefix}/${id}`)
export const getCategory = (id) => api.get(`${prefix}/${id}`);
export const updateCategory = (id, data) => api.put(`${prefix}/${id}`, data);

