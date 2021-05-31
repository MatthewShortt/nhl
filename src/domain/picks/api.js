import { client } from '../../api.client';

export const PicksApi = {
    getPicks: async (token) => client.get('/fantasy/hockey/entry', {
        headers: {
            Authorization: `Bearer ${token}`
        },
        params: {
            year: '2021',
            round: '2'
        }
    }),

    updatePicks: async (token, { picks }) => client.post('/fantasy/hockey/entry', {
        year: '2021',
        round: '2',
        picks
    }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
};