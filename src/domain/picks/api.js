import { client } from '../../api.client';

export const PicksApi = {
    getPicks: async ({token}) => client.get('/fantasy/hockey/entry', {
        headers: {
            Authorization: `Bearer ${token}`
        },
        params: {
            year: '2020',
            round: '1'
        }
    })
};