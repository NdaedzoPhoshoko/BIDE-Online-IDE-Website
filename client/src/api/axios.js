// Axios instance configuration for API calls
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api', // Adjust base URL as needed
});

export default api;
