import React       from 'react';
import FormFlipper from '../../containers/form-flipper/form-flipper';
import './logon.css';

function LogonLayout() {
    return (
        <div className='full-background'>
            <div className='uk-container uk-flex uk-flex-middle uk-height-viewport logon-wrapper'>
                <div className='uk-width-1-2@m uk-text-center'>
                    <h1 className='color-white'>Welcome to Sports Hounds</h1>
                </div>
                <div className='uk-width-1-2@m'>
                    <FormFlipper/>
                </div>
            </div>
        </div>
    );
}

export default LogonLayout;