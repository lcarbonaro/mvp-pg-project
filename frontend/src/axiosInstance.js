const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

export default axiosInstance;




