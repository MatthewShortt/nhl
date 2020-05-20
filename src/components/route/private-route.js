import React                            from 'react';
import { Redirect, Route, useLocation } from 'react-router-dom';
import { useStateValue }                from '#state';

function PrivateRoute({ component: Component, ...rest }) {

    const [{ user: { token } }] = useStateValue();
    const location = useLocation();

    return (
        <Route
            {...rest}
            render={props =>
                token ? (
                    <Component {...props} />
                ) : (
                    <>
                        <Redirect to={{
                            pathname: '/login',
                            state: { referrer: getReferrer() }
                        }}/>
                    </>
                )
            }
        />
    );

    // TODO: Figure out why redirect is causing a reload of the private route
    function getReferrer() {
        if (location.pathname !== '/login')
            return location.pathname;
        else
            return location.state?.referrer;
    }
}

export default PrivateRoute;