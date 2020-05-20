import React  from 'react';
import Header from '#containers/header/header';

function StandardLayout({ children }) {
    return (
        <>
            <Header/>
            <div className='uk-container'>
                <div className="uk-margin-top uk-margin-bottom">
                    {children}
                </div>
            </div>
        </>
    );
}

export default StandardLayout;