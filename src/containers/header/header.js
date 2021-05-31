import React             from 'react';
import { useHistory }    from 'react-router-dom';
import { useStateValue } from '#state';
import { logout }        from '#domain/users/actions';
import './header.css';

function Header() {

    const [{ user: { username } }, dispatch] = useStateValue();
    const history = useHistory();

    return(
        <div className='uk-container uk-container-expand uk-padding-remove uk-background-secondary'>
            <div className='uk-flex uk-flex-middle uk-margin-small-top uk-margin-small-bottom uk-margin-medium-left uk-margin-medium-right uk-nav'>
                <div className='uk-width-auto'>
                    <img src='http://www-league.nhlstatic.com/images/logos/league-dark/133-flat.svg' className='logo' alt='Logo' onClick={() => history.push('/')} />
                </div>
                <div className='uk-width-expand'>
                    <div className='uk-float-right'>
                        <div className='uk-padding-small uk-display-inline-block'>
                            <span className='uk-icon-button uk-margin-small-right' data-uk-icon='user'/>
                            <div data-uk-dropdown='pos: bottom-right; offset: 25'>
                                <ul className='uk-nav uk-dropdown-nav'>
                                    <li className='uk-nav-header'>{username}</li>
                                    <li className='uk-nav-divider'/>
                                    <li>
                                        <button className='uk-button uk-button-secondary uk-width-1-1' type='button' onClick={() => logout(dispatch)}>
                                            Logout
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;