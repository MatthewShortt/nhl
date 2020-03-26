import React, { useState } from 'react';
import { Field }           from 'formik';

function PasswordFieldElement({name, placeholder, autoComplete, errors, touched}) {

    const [type, setType] = useState('password');

    return (
        <>
            <div className='uk-inline uk-width-1-1'>
                <span className='uk-form-icon' data-uk-icon='icon: lock'/>
                <Field name={name} type={type} placeholder={placeholder || name} autoComplete={autoComplete} className='uk-input' />
                <button type='button' className='uk-form-icon uk-form-icon-flip uk-button-link' data-uk-icon='icon: search'
                        onClick={() => setType(type === 'password' ? 'text' : 'password')}/>
            </div>
            <div className={(errors[name] && touched[name]) ? 'uk-alert-danger uk-text-center' : 'uk-invisible'}>
                <p className='uk-margin-remove-bottom'>{(errors[name] && touched[name]) ? errors[name] : 'Invisible'}</p>
            </div>
        </>
    )
}

export default PasswordFieldElement;