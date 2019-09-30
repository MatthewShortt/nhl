import {API_URL, getData} from '../Fetch.api';

export const StatsApi = {
  all: () => getData(`${API_URL}/stats/skaters`),
};