import axios from 'axios';
import { getAccessToken, getRefreshToken, setTokens, clearTokens } from './tokenutils';

const api = axios.create({
    baseURL: 'http://localhost:8000',
    headers: {
        'Content-Type': 'application/json',
      },
});

api.interceptors.request.use(
    config => {
        const token = getAccessToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    // console.log(error),
    error => Promise.reject(error)
);

api.interceptors.response.use(
    response => response,
    async error => {
        console.log(error)
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            const refreshToken = getRefreshToken();
            if (refreshToken) {
                try {
                    const response = await axios.post('http://localhost:8000/o/auth/refreshtokens', { refreshToken });
                    setTokens(response.data.accessToken, response.data.refreshToken);
                    axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.accessToken}`;
                    return api(originalRequest);
                } catch (e) {
                    clearTokens();
                    window.location.href = '/signin';
                }
            }
        }
        return Promise.reject(error);
    }
);

export default api;
