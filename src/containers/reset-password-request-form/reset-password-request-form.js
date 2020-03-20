import React                          from 'react';
import { Formik, Form }               from 'formik';
import FieldElement                   from '#components/field-element';
import { resetPasswordRequest }       from '#domain/users/actions';
import { useDispatch }                from '#state';
import { ResetPasswordRequestSchema } from './reset-password-request-schema';

function ResetPasswordRequestForm() {

    const dispatch = useDispatch();

    return (
        <div>
            <Formik
                initialValues={{ email: '' }}
                validationSchema={ResetPasswordRequestSchema}
                onSubmit={({ email }) => resetPasswordRequest(dispatch, { email })}
            >
                {({ errors, touched }) => (

                    <Form>
                        <FieldElement logo={'mail'} name={'email'} errors={errors} touched={touched}/>
                        <button type='submit' className='uk-button uk-button-primary uk-align-center uk-margin-small-top'>Request reset</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default ResetPasswordRequestForm;