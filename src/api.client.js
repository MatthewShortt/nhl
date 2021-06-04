import axios         from 'axios';
import { configure } from 'axios-hooks'

export const client = axios.create({
    baseURL: process.env.REACT_APP_API_URL
});

client.interceptors.request.use(config => {
    return config;
});

configure({ axios: client });