import axios from 'axios';

// export const API_URL = process.env.NHL_STATS_API_URL ? process.env.NHL_STATS_API_URL : 'https://planning-poker-241613.appspot.com';
//
// export const getData = async (url, params) => {
//     let config = {crossdomain: true};
//     config.params = params || {};
//     const result = await axios.get(url, config);
//     return result.data;
// };

export const API_URL = 'http://localhost:9000';

export const client = axios.create({
    baseURL: API_URL
});

client.interceptors.request.use(config => {
    console.log('MY_CONFIG', config);

    return config;
});