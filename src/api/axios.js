//Nơi cấu hình base cho axios
import axios from 'axios'; 
//Khởi tạo cấu hình axios cho toàn bộ project
const apiAxios = axios.create ({
  baseURL: 'https://629346297aa3e6af1a08ca51.mockapi.io'
});

export default apiAxios; 