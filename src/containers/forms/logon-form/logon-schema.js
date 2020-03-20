import * as Yup from "yup";

export const LogonSchema = Yup.object().shape({
    emailOrUsername: Yup.string()
        .required('Email or Username Required'),
    password: Yup.string()
        .required('Password Required')
});