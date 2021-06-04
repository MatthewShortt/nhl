import React          from 'react';
import { useHistory } from 'react-router-dom';

function MediaCard({ title, linkTo, img, alt, icon }) {

    const history = useHistory();

    return(
        <div className='uk-button uk-padding-remove-right' onClick={() => history.push(linkTo)}>
            <div className="uk-card uk-card-default">
                <div className="uk-card-body">
                    <h3 className="uk-card-title">{title}</h3>
                </div>
                <div className="uk-card-media-bottom">
                    {img
                        ? <img src={img} alt={alt} className='card-image uk-margin-medium-bottom'/>
                        : <span data-uk-icon={`icon: ${icon}; ratio: 2`} className='card-image uk-margin-medium-bottom'/>
                    }
                </div>
            </div>
        </div>
    );
}

export default MediaCard;