import useAxios from 'axios-hooks';

export const useUserTotals = (token, username, round) => {
    return useAxios(
        {
            url: '/fantasy/hockey/totals',
            headers: { Authorization: `Bearer ${token}` },
            params: { username, round }
        },
        { manual: !username }
    );
}