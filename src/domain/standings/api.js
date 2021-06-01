import { client } from '../../api.client';

export const StandingsApi = {
    getStandings: (token, rounds) => client.get('/fantasy/hockey/standings', {
        headers: {
            Authorization: `Bearer ${token}`
        },
        params: { rounds }
    })
}