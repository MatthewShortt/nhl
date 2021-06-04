import React from 'react';

const Nav = Component => ({ match: { path }, history }) => {
    const getProps = (pathname) => ({
        className: path.endsWith(pathname) ? 'uk-active' : '',
        onClick: () => history.push(`./${pathname}`)
    });

    return (
        <>
            <nav>
                <ul data-uk-tab>
                    <li {...getProps('my-picks')}><a href="#my-picks">My Picks</a></li>
                    <li {...getProps('standings')}><a href="#standings">Standings</a></li>
                    <li {...getProps('make-picks')}><a href="#make-picks">Make Picks</a></li>
                </ul>
            </nav>
            <Component/>
        </>
    )
};

export default Nav;