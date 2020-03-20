const
    LOGON = 'LOGON',
    SIGNUP = 'SIGNUP',
    RESET = 'RESET';

const
    logonLink = generateLink('LOGON', LOGON),
    signupLink = generateLink('SIGN UP', SIGNUP),
    resetPasswordLink = generateLink('RESET PASSWORD', RESET);

const
    logon = generateFormValues('LogonForm', 'Logon', resetPasswordLink, signupLink),
    signup = generateFormValues('SignupForm', 'Sign Up', logonLink, resetPasswordLink),
    resetPasswordRequest = generateFormValues('ResetPasswordRequestForm', 'Reset Password', signupLink, logonLink);

function generateLink(text, form) {
    return { text, form };
}

function generateFormValues(form, title, leftLink, rightLink) {
    return { form, title, leftLink, rightLink };
}

module.exports = {
    LOGON: logon,
    SIGNUP: signup,
    RESET: resetPasswordRequest
};