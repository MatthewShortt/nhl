import {StatsApi} from './Stats.api';
import * as FetchApi from '../Fetch.api';

describe('StatsAPI', () => {

    it('all() should call getData() from FetchApi', () => {
        FetchApi.getData = jest.fn();
        StatsApi.all();
        expect(FetchApi.getData).toHaveBeenCalledTimes(1);
    });
});