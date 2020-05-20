import React             from 'react';
import { useLocation }   from 'react-router-dom';
import RouteAfterSuccess from './route-after-success';

function RouteAfterLoginSuccess({ children, booleanExpression }) {

    const location = useLocation();
    const redirectTo = location.state?.referrer || '/';

    return (
        <RouteAfterSuccess booleanExpression={booleanExpression} redirectTo={redirectTo}>
            {children}
        </RouteAfterSuccess>
    );
}

export default RouteAfterLoginSuccess;