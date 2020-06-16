import { client } from '../../api.client';

export const StandingsApi = {
    getStandings: (token) => client.get('/fantasy/hockey/standings', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}