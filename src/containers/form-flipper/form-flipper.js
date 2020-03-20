import React, { useState } from 'react';
import Forms               from '#containers/forms';
import FormStates          from './form-flipper.constants';
import './form-flipper.css';

function FormFlipper() {

    const [flipped, setFlipped] = useState(false);
    const [activeForm, setActiveForm] = useState({ ...FormStates.LOGON, isFlipped: false });

    return (
        <div className={`card uk-height-1-1 ${flipped ? 'rotate-right' : ''}`}>
            <div className={`uk-card uk-card-small uk-card-default uk-card-body uk-height-1-1 ${activeForm.isFlipped ? 'rotate-right' : ''}`}>
                <h3 className='uk-card-title uk-text-center'>{activeForm.title}</h3>
                {Forms[activeForm.form]()}
                <div className='uk-position-bottom uk-margin-left uk-margin-right uk-margin-bottom uk-card-footer'>
                    <span className='uk-button uk-button-text uk-float-left'
                          onClick={() => flipPage(activeForm.leftLink.form)}>{activeForm.leftLink.text}</span>
                    <span className='uk-button uk-button-text uk-float-right'
                          onClick={() => flipPage(activeForm.rightLink.form)}>{activeForm.rightLink.text}</span>
                </div>
            </div>
        </div>
    );

    function flipPage(form) {
        const isFlipped = !flipped;
        setFlipped(!flipped);
        setTimeout(() => setActiveForm({ ...FormStates[form], isFlipped }), 545);
    }

}

export default FormFlipper;