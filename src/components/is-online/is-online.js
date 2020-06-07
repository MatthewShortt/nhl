import React                from 'react';
import { Offline, Online }  from 'react-detect-offline';
import NoInternetConnection from '../../resources/no-internet-connection.gif';

function IsOnline({ children }) {
    return (
        <>
            <Online>
                {children}
            </Online>
            <Offline>
                <div className="uk-height-viewport uk-container uk-container-xlarge uk-text-center uk-flex uk-flex-middle uk-flex-center uk-flex-column">
                    <img src={NoInternetConnection} width='400' alt="No Internet Connection..."/>
                    <h2 className='uk-margin-small-bottom'>No Connection.</h2>
                    <p>Please check your internet connection and try again.</p>
                </div>
            </Offline>
        </>
    );
}

export default IsOnline;