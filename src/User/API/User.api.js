import {API_URL, getData} from '../../Fetch.api';

export const UserAPI = {
  all: () => getData(`${API_URL}/stats/skaters`),
};