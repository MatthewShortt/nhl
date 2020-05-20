import React                from 'react';
import { Form, Formik }     from 'formik';
import FieldElement         from '#components/form-elements/field-element';
import PasswordFieldElement from '#components/form-elements/password-field-element';
import RouteAfterSuccess    from '#components/route/route-after-success';
import { create }           from '#domain/users/actions';
import { useStateValue }    from '#state';
import { SignupSchema }     from './signup-schema';

function SignupForm() {

    const [{ user: { token } }, dispatch] = useStateValue();

    return (
        <RouteAfterSuccess booleanExpression={!token} redirectTo={'/'}>
            <div>
                <Formik
                    initialValues={{ email: '', username: '', password: '', confirmPassword: '' }}
                    validationSchema={SignupSchema}
                    onSubmit={({ email, username, password }) => create(dispatch, { email, username, password })}
                    enableReinitialize={true}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <FieldElement logo={'mail'} name={'email'} errors={errors} touched={touched}/>
                            <FieldElement logo={'user'} name={'username'} autoComplete={'off'} errors={errors} touched={touched}/>
                            <PasswordFieldElement name={'password'} autoComplete={'new-password'} errors={errors} touched={touched}/>
                            <PasswordFieldElement name={'confirmPassword'} placeholder={'confirm password'} autoComplete={'new-password'} errors={errors} touched={touched}/>

                            <button type='submit' className='uk-button uk-button-primary uk-align-center uk-margin-small-top'>Sign up</button>
                        </Form>
                    )}
                </Formik>
            </div>
        </RouteAfterSuccess>
    );
}

export default SignupForm;