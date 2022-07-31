import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8888',
    // withCredentials: true
});

instance.interceptors.response.use(
    (response) => {
        // Thrown error for request with OK status code
        const { data } = response;
        return response.data;
    }
);

export default instance;