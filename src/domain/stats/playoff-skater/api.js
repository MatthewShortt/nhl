import { client } from '../../../api.client';

export const PlayoffSkaterStatsApi = {
    getPlayoffSkaterStats: async ({token}) => client.get('/fantasy/hockey/stats/skaters', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }),
    getPlayoffGoalieStats: async ({token}) => client.get('/fantasy/hockey/stats/goalies', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
};