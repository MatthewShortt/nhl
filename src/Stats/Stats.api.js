import {API_URL, getData} from '../Fetch.api';

export const StatsApi = {
    all: (params) => getData(`${API_URL}/stats`, params),
};