import React            from 'react';
import { Formik, Form } from 'formik';
import FieldElement     from '#components/field-element';
import { logon }        from '#domain/users/actions';
import { useDispatch }  from '#state';
import { LogonSchema }  from './logon-schema';

function LogonForm() {

    const dispatch = useDispatch();

    return (
        <div>
            <Formik
                initialValues={{ emailOrUsername: '', password: '' }}
                validationSchema={LogonSchema}
                onSubmit={({ emailOrUsername, password }) => logon(dispatch, { emailOrUsername, password })}
            >
                {({ errors, touched }) => (

                    <Form>
                        <FieldElement logo={'user'} name={'emailOrUsername'} type='text' placeholder={'email or username'} autoComplete={'off'} errors={errors} touched={touched}/>
                        <FieldElement logo={'lock'} name={'password'} autoComplete={'new-password'} errors={errors} touched={touched}/>

                        <button type='submit' className='uk-button uk-button-primary uk-align-center uk-margin-small-top'>Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default LogonForm;