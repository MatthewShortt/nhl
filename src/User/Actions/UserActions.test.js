import {
    getSkatersAsync,
    PostUser,
    postUserAsync,
    SKATERS_ERROR,
    SKATERS_GET_REQUESTED,
    USER_POST_REQUESTED,
    SKATERS_SUCCESS,
    watchSkatersAsync
} from "./UserActions";
import {UserAPI} from "../API/User.api";
import {call, put, select, takeLatest} from 'redux-saga/effects';
import {viewMeetings} from '../../Navigation/route-actions';
import {LocationState} from "../../Common/selectors";
import {push} from "connected-react-router";


describe('Test action creators', () => {
    let fixture;

    describe('Post action', () => {

        beforeEach(() => {
            fixture = postUserAsync({payload: 'Fred'});
        });

        it('should dispatch view meetings action when location state undefined', () => {
            expect(fixture.next().value).toEqual(call(UserAPI.create, { name: 'Fred' }));
            expect(fixture.next('Fred').value).toEqual(put({
                type: SKATERS_SUCCESS,
                payload: {
                    user: 'Fred'
                }
            }));
            expect(fixture.next().value).toEqual(select(LocationState));
            expect(fixture.next(undefined).value).toEqual(put(viewMeetings()));
            expect(fixture.next().done).toBeTruthy();
        });

        it('should dispatch push to next path when state is defined', () => {
            const locationState = {nextPathname: '/nextpath/'};

            expect(fixture.next().value).toEqual(call(UserAPI.create, { name: 'Fred' }));
            expect(fixture.next('Fred').value).toEqual(put({
                type: SKATERS_SUCCESS,
                payload: {
                    user: 'Fred'
                }
            }));
            expect(fixture.next().value).toEqual(select(LocationState));
            expect(fixture.next(locationState).value).toEqual(put(push(locationState.nextPathname)));
            expect(fixture.next().done).toBeTruthy();
        });

        it('should handle errors', () => {
            fixture.next();
            let e = {message: 'Fred you\'re no good!'};
            expect(fixture.throw(e).value).toEqual(put({
                type: SKATERS_ERROR,
                payload: {
                    error: e
                }
            }));
            expect(fixture.next().done).toBeTruthy();
        });
    });

    describe('Get action', () => {
        const userId = '123456789';

        beforeEach(() => {
            fixture = getSkatersAsync({payload: userId});
        });

        it('should dispatch action', () => {
            expect(fixture.next().value).toEqual(call(UserAPI.byId, userId));
            expect(fixture.next('Fred').value).toEqual(put({
                type: SKATERS_SUCCESS,
                payload: {
                    user: 'Fred'
                }
            }));
            expect(fixture.next().done).toBeTruthy();
        });

        it('should handle errors', () => {
            fixture.next();
            let e = {message: 'Fred you\'re no good!'};
            expect(fixture.throw(e).value).toEqual(put({
                type: SKATERS_ERROR,
                payload: {
                    error: e
                }
            }));
            expect(fixture.next().done).toBeTruthy();
        });
    });

    describe('Watch ', () => {
        it('Users', () => {
            fixture = watchSkatersAsync();

            expect(fixture.next().value).toEqual(takeLatest(SKATERS_GET_REQUESTED, getSkatersAsync));
            expect(fixture.next().value).toEqual(takeLatest(USER_POST_REQUESTED, postUserAsync));
        });
    });

    describe('Public Functions', () => {
        let actualResponse, expectedResponse;

        it('should return proper JSON response for PostUser', () => {
            const userName = 'mockUserName';
            expectedResponse = {
                type: USER_POST_REQUESTED,
                payload: userName
            };
            actualResponse = PostUser(userName);
            expect(expectedResponse).toEqual(actualResponse);
        });
    });

});
