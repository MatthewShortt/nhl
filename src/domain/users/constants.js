/*
 * User Logon Constants
 */
export const USER_LOGON_SUCCESS = 'USER_LOGON_SUCCESS';
export const EMAIL_OR_USERNAME_DOES_NOT_EXIST = 'EMAIL_OR_USERNAME_DOES_NOT_EXIST';
export const INCORRECT_PASSWORD = 'INCORRECT_PASSWORD';
export const USER_LOGON_ERROR = 'USER_LOGON_ERROR';
export const USER_LOGON_ERRORS = {
    EMAIL_OR_USERNAME_DOES_NOT_EXIST: {
        type: EMAIL_OR_USERNAME_DOES_NOT_EXIST,
        data: 'Email or username does not exist!'
    },
    INCORRECT_PASSWORD: {
        type: INCORRECT_PASSWORD,
        data: 'Incorrect password!'
    },
    USER_LOGON_ERROR: {
        type: USER_LOGON_ERROR,
        data: 'A connection error occurred.'
    }
};

/*
 * User Create Constants
 */
export const USER_CREATE_SUCCESS = 'USER_CREATE_SUCCESS';
export const USER_CREATE_ERROR = 'USER_CREATE_ERROR';

/*
 * User Reset Password Request Constants
 */
export const USER_PASSWORD_RESET_REQUEST_SUCCESS = 'USER_PASSWORD_RESET_REQUEST_SUCCESS';
export const USER_PASSWORD_RESET_REQUEST_ERROR = 'USER_PASSWORD_RESET_REQUEST_ERROR';