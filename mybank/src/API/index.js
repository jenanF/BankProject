import axios from "axios";

const instance = axios.create({ baseURL: 'https://react-bank-project.eapi.joincoded.com/' });

instance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token'); // Get token from local storage
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`; // Attach token to headers
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);


export default instance;