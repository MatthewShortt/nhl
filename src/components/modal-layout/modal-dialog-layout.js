import React from 'react';

function ModalDialogLayout({id, title, children}) {

    const [body, navButton] = children;

    return(
        <div id={id} data-uk-modal={true}>
            <div className="uk-modal-dialog">

                <button className="uk-modal-close-default" type="button" data-uk-close={true}/>

                <div className="uk-modal-header">
                    <h2 className="uk-modal-title">{title}</h2>
                </div>

                <div className="uk-modal-body">
                    {body}
                </div>

                <div className="uk-modal-footer uk-text-right">
                    <div className='uk-float-left'>
                        <button className="uk-button uk-button-default uk-margin-small-right uk-modal-close" type="button">Cancel</button>
                    </div>
                    <div className='uk-float-right'>
                        {navButton}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ModalDialogLayout;