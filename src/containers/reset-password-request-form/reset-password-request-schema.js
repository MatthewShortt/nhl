import * as Yup from "yup";

export const ResetPasswordRequestSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Email Required')
});