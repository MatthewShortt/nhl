import React        from 'react';
import { Redirect } from 'react-router-dom';

function RouteAfterSuccess({ children, booleanExpression, redirectTo }) {
    return booleanExpression ? (<>{children}</>) : (<Redirect to={redirectTo}/>);
}

export default RouteAfterSuccess;