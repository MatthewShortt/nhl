import React from 'react';
import MediaCard from '#components/cards/media-card';
import './home.css';

function Home() {

    return(
        <>
            <div className="uk-child-width-1-1@m" data-uk-grid data-uk-height-match="target: > div > .uk-card; row: false">
                <MediaCard title='NHL Playoff Pool' linkTo='/fantasy/nhl' img='http://www-league.nhlstatic.com/images/logos/league-dark/133-flat.svg' alt='NHL Logo'/>
                {/*<MediaCard title='PGA Fantasy' linkTo='/fantasy/pga' img='https://cdn.freebiesupply.com/logos/large/2x/pga-tour-6-logo-png-transparent.png' alt='PGA Logo'/>*/}
            </div>
        </>
    );

}

export default Home;