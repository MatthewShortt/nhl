import React     from 'react';
import { Field } from 'formik';

function FieldElement({name, type, placeholder, autoComplete, logo, errors, touched}) {
    return (
        <>
            <div className='uk-inline uk-width-1-1'>
                <span className='uk-form-icon' data-uk-icon={`icon: ${logo}`}/>
                <Field name={name} type={type || name} placeholder={placeholder || name} autoComplete={autoComplete || name} className='uk-input' />
            </div>
            <div className={errors[name] && touched[name] ? "uk-alert-danger uk-text-center" : "uk-invisible"}>
                <p className="uk-margin-remove-bottom">{errors[name] ? errors[name] : "Invisible"}</p>
            </div>
        </>
    )
}

export default FieldElement;