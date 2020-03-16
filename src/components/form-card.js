import React from 'react';

function FormCard({title, children}) {

    return (
        <div className='uk-card uk-card-small uk-card-default uk-card-body'>
            <h3 className='uk-card-title uk-text-center'>{title}</h3>
            {children}
            <div className="uk-card-footer">
                <a href="/" className="uk-button uk-button-text uk-float-left">RESET PASSWORD</a>
                <a href="/" className="uk-button uk-button-text uk-float-right">SIGN UP</a>
            </div>
        </div>
    )
}

export default FormCard;