const axios = require('axios');

// export const API_URL = process.env.NHL_STATS_API_URL ? process.env.NHL_STATS_API_URL : 'https://planning-poker-241613.appspot.com';
export const API_URL = 'http://localhost:9000';

export const getData = async (url, params) => {
    let config = {crossdomain: true};
    config.params = params || {};
    const result = await axios.get(url, config);
    return result.data;
};