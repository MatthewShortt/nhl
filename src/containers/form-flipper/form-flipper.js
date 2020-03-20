import React, { useState }      from 'react';
import SignupForm               from '#containers/signup-form/signup-form';
import LogonForm                from '#containers/logon-form/logon-form';
import ResetPasswordRequestForm from '../reset-password-request-form/reset-password-request-form';
import './form-flipper.css';

function FormFlipper() {

    const [clicked, setClicked] = useState(false);
    const [activeForm, setActiveForm] = useState({ active: 'LOGON', isFlipped: false });

    return (
        <div className={`card uk-height-1-1 ${clicked ? 'rotate-right' : ''}`}>
            <div className={`uk-card uk-card-small uk-card-default uk-card-body uk-height-1-1 ${getStyle('LOGON')}`}>
                <h3 className='uk-card-title uk-text-center'>Logon</h3>
                <LogonForm/>
                <div className='uk-position-bottom uk-margin-left uk-margin-right uk-margin-bottom uk-card-footer'>
                    <span className='uk-button uk-button-text uk-float-left'
                          onClick={() => flipPage('RESET')}>Reset Password</span>
                    <span className='uk-button uk-button-text uk-float-right'
                          onClick={() => flipPage('SIGNUP')}>Sign up</span>
                </div>
            </div>
            <div className={`uk-card uk-card-small uk-card-default uk-card-body uk-height-1-1 ${getStyle('SIGNUP')}`}>
                <h3 className='uk-card-title uk-text-center'>Sign up</h3>
                <SignupForm/>
                <div className='uk-position-bottom uk-margin-left uk-margin-right uk-margin-bottom uk-card-footer'>
                    <span className='uk-button uk-button-text uk-float-left'
                          onClick={() => flipPage('LOGON')}>Logon</span>
                    <span className='uk-button uk-button-text uk-float-right'
                          onClick={() => flipPage('RESET')}>Reset Password</span>
                </div>
            </div>
            <div className={`uk-card uk-card-small uk-card-default uk-card-body uk-height-1-1 ${getStyle('RESET')}`}>
                <h3 className='uk-card-title uk-text-center'>Reset Password</h3>
                <ResetPasswordRequestForm/>
                <div className='uk-position-bottom uk-margin-left uk-margin-right uk-margin-bottom uk-card-footer'>
                    <span className='uk-button uk-button-text uk-float-left'
                          onClick={() => flipPage('SIGNUP')}>Sign up</span>
                    <span className='uk-button uk-button-text uk-float-right'
                          onClick={() => flipPage('LOGON')}>Logon</span>
                </div>
            </div>
        </div>
    );

    function getStyle(form) {
        if (activeForm.active !== form) return 'display-none';
        if (activeForm.isFlipped) return 'rotate-right';
        return '';
    }

    function flipPage(active, fromDirection) {
        const isFlipped = !clicked;
        setClicked(!clicked);
        setTimeout(() => setActiveForm({ active, isFlipped }), 545);
    }

}

export default FormFlipper;