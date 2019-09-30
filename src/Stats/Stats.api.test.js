import {StatsApi} from './Stats.api';
import * as FetchApi from '../Fetch.api';

describe('UserAPI', () => {

    it('all() should call getData() from FetchApi', () => {
        FetchApi.getData = jest.fn();
        StatsApi.all();
        expect(FetchApi.getData).toHaveBeenCalledTimes(1);
    });

    it('byId() should call getData() from FetchApi', () => {
        FetchApi.getData = jest.fn();
        StatsApi.byId('123');
        expect(FetchApi.getData).toHaveBeenCalledTimes(1);
    });

    it('create() should call postData() from FetchApi', () => {
        FetchApi.postData = jest.fn();
        StatsApi.create({});
        expect(FetchApi.postData).toHaveBeenCalledTimes(1);
    });
});