//file này chứa định nghĩa các hàm lấy dữ liệu từ api
import api from './axios'
const prefix = '/category'
const suffix =  'books'

export const getCtgBooks = (ctgId) => api.get(`${prefix}/${ctgId}/${suffix}`);
export const getBook = (ctgId, idBook) => api.get(`${prefix}/${ctgId}/${suffix}/${idBook}`);