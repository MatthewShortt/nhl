import axios from 'axios';

export const client = axios.create({
    baseURL: process.env.REACT_APP_API_URL
});

client.interceptors.request.use(config => {
    console.log('MY_CONFIG', config);
    return config;
});