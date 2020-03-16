export const FLIP_TO_SIGNUP = 'FLIP_TO_SIGNUP';
export const FLIP_TO_LOGON = 'FLIP_TO_LOGON';
export const FLIP_TO_RESET_PASSWORD = 'FLIP_TO_RESET_PASSWORD';
export const FLIP_RESET = 'FLIP_RESET';

const resetPasswordLink = {
    text: 'RESET PASSWORD',
    action: FLIP_TO_RESET_PASSWORD
};

const logonLink = {
    text: 'LOGON',
    action: FLIP_TO_LOGON
};

const signupLink = {
    text: 'SIGN UP',
    action: FLIP_TO_SIGNUP
};

export const logon = {
    form: 'LogonForm',
    title: 'Logon',
    leftLink: resetPasswordLink,
    rightLink: signupLink
};

export const signup = {
    form: 'SignupForm',
    title: 'Sign Up',
    leftLink: logonLink,
    rightLink: resetPasswordLink
};

export const resetPassword = {
    form: 'ResetPassword',
    title: 'Reset Password',
    leftLink: signupLink,
    rightLink: logonLink
};