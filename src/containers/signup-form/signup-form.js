import React            from 'react';
import { Formik, Form } from 'formik';
import FieldElement     from '#components/field-element';
import { create }       from '#domain/users/actions';
import { useDispatch }  from '#state';
import { SignupSchema } from './signup-schema';

function SignupForm() {

    const dispatch = useDispatch();

    return (
        <div>
            <Formik
                initialValues={{ email: '', username: '', password: '', confirmPassword: '' }}
                validationSchema={SignupSchema}
                onSubmit={({ email, username, password }) => create(dispatch, { email, username, password })}
            >
                {({ errors, touched }) => (
                    <Form>
                        <FieldElement logo={'mail'} name={'email'} errors={errors} touched={touched}/>
                        <FieldElement logo={'user'} name={'username'} autoComplete={'off'} errors={errors} touched={touched}/>
                        <FieldElement logo={'lock'} name={'password'} autoComplete={'new-password'} errors={errors} touched={touched}/>
                        <FieldElement logo={'lock'} name={'confirmPassword'} type={'password'} placeholder={'confirm password'} autoComplete={'new-password'} errors={errors} touched={touched}/>

                        <button type='submit' className='uk-button uk-button-primary uk-align-center uk-margin-small-top'>Sign up</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default SignupForm;