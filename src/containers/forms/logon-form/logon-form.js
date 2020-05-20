import React                  from 'react';
import { Form, Formik }       from 'formik';
import FieldElement           from '#components/form-elements/field-element';
import PasswordFieldElement   from '#components/form-elements/password-field-element';
import RouteAfterLoginSuccess from '#components/route/route-after-login-success';
import { logon }              from '#domain/users/actions';
import { useStateValue }      from '#state';
import { LogonSchema }        from './logon-schema';

function LogonForm() {

    const [{ user: { token } }, dispatch] = useStateValue();

    return (
        <RouteAfterLoginSuccess booleanExpression={!token}>
            <div>
                <Formik
                    initialValues={{ emailOrUsername: '', password: '' }}
                    validationSchema={LogonSchema}
                    onSubmit={({ emailOrUsername, password }) => logon(dispatch, { emailOrUsername, password })}
                    enableReinitialize={true}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <FieldElement logo={'user'} name={'emailOrUsername'} type='text' placeholder={'email or username'} autoComplete={'off'} errors={errors} touched={touched}/>
                            <PasswordFieldElement name={'password'} autoComplete={'current-password'} errors={errors} touched={touched}/>

                            <button type='submit' className='uk-button uk-button-primary uk-align-center uk-margin-small-top'>Logon</button>
                        </Form>
                    )}
                </Formik>
            </div>
        </RouteAfterLoginSuccess>
    );
}

export default LogonForm;