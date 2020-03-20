import { client } from '../../api.client';

export const UserApi = {
    logon: async ({ emailOrUsername, password }) => client.post('/users/login', {
        emailOrUsername,
        password
    }),
    create: async ({ email, username, password }) => client.post('/users/create', {
        email,
        username,
        password
    }),
    resetPasswordRequest: async ({ email }) => client.post('/users/resetPasswordRequest', {
        email
    })
};