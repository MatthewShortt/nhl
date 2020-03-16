import React             from 'react';
import SignupForm        from '#containers/signup-form/signup-form';
import LogonForm         from '#containers/logon-form/logon-form';
import { useStateValue } from '#state';
import { flipForm }      from '#domain/logon/actions';

function FormFlipper() {

    const [{ logon }, dispatch] = useStateValue();

    const forms = {
        'LogonForm': LogonForm(),
        'SignupForm': SignupForm(),
        'ResetPassword': 'Reset Password not implemented.'
    };

    return (
        <>
            <div className='uk-card uk-card-small uk-card-default uk-card-body'>
                <h3 className='uk-card-title uk-text-center'>{logon.title}</h3>
                {forms[logon.form]}
                <div className="uk-card-footer">
                    <span className="uk-button uk-button-text uk-float-left"
                          onClick={() => flipForm(dispatch, logon.leftLink.action)}>{logon.leftLink.text}</span>
                    <span className="uk-button uk-button-text uk-float-right"
                          onClick={() => flipForm(dispatch, logon.rightLink.action)}>{logon.rightLink.text}</span>
                </div>
            </div>
        </>
    );

}

export default FormFlipper;