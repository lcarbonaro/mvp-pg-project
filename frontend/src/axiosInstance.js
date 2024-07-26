const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

export default axiosInstance;




