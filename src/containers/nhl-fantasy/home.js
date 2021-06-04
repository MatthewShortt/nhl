import React     from 'react';
import MediaCard from '../../components/cards/media-card';

const Home = () => (
    <div className="uk-child-width-1-2@m" data-uk-grid data-uk-height-match="target: > div > .uk-card; row: false">
        <MediaCard title='My Picks' linkTo='/fantasy/nhl/my-picks' icon='star'/>
        <MediaCard title='Standings' linkTo='/fantasy/nhl/standings' icon='table'/>
        <MediaCard title='Make Picks' linkTo='/fantasy/nhl/make-picks' icon='future'/>
    </div>
);

export default Home;