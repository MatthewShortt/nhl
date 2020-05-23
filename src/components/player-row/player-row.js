import React  from 'react';
import _      from 'lodash';
import Player from '#containers/player/player';

function PlayerRow({players, conference}) {

    return (
        <div className='uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-6@m uk-text-center' data-uk-grid>
            {Object.keys(_.pick(players, conference)).map(key =>
                <div key={`player_${players[key].id}_${key}`}>
                    {<Player
                        id={players[key].id}
                        name={players[key].name}
                        team={players[key].team}
                        position={key}
                    />}
                </div>
            )}
        </div>
    );

}

export default PlayerRow;
