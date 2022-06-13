//file này chứa định nghĩa các hàm lấy dữ liệu từ api
import api from './axios'
const prefix = '/category'
const suffix =  'books'

export const getCtgBooks = (ctgId) => api.get(`${prefix}/${ctgId}/${suffix}`);
export const getBook = (ctgId, idBook) => api.get(`${prefix}/${ctgId}/${suffix}/${idBook}`);

export const delBook = (ctgId, idBook) => api.delete(`${prefix}/${ctgId}/${suffix}/${idBook}`);
export const createBook = (ctgId, data) => api.post(`${prefix}/${ctgId}/${suffix}`, data);
export const updateBook = (ctgId, idBook, data) => api.put(`${prefix}/${ctgId}/${suffix}/${idBook}`, data);