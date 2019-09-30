import {Stats} from './Stats';

describe('Container: User', () => {
    it('should render Stats correctly', () => {
        const props = {
            user: {
                name: 'Mock User'
            },
            error: null,
            goToMeetings: jest.fn()
        }
        expect(Stats(props)).toMatchSnapshot();
    });
});