import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Email Required'),
    username: Yup.string()
        .min(2, 'Too Short.')
        .max(20, 'Too Long.')
        .matches(
            /^[a-zA-Z0-9_.-]*$/,
            'No Special Characters Allowed.'
        )
        .required('Username Required'),
    password: Yup.string()
        .required('Password Required')
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&^])[A-Za-z\d@$!%*#?&^]{8,}$/,
            'Minimum 8 Characters (1 Uppercase, 1 Lowercase, 1 Number and 1 Special Character)'
        ),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Password Confirm Required')
});