import React from 'react';

const Deadline = () => {
    return (
        <>
            <div className='uk-grid-small uk-child-width-auto uk-margin' data-uk-grid
                 data-uk-countdown='date: 2021-05-31T19:30:00-04:00'>
                <span>Deadline</span>
                <div>
                    <span className='uk-countdown-number uk-countdown-days uk-text-small'/>
                </div>
                <div className='uk-countdown-separator uk-text-small'>:</div>
                <div>
                    <span className='uk-countdown-number uk-countdown-hours uk-text-small'/>
                </div>
                <div className='uk-countdown-separator uk-text-small'>:</div>
                <div>
                    <span className='uk-countdown-number uk-countdown-minutes uk-text-small'/>
                </div>
                <div className='uk-countdown-separator uk-text-small'>:</div>
                <div>
                    <span className='uk-countdown-number uk-countdown-seconds uk-text-small'/>
                </div>
            </div>
        </>
    );
}

export default Deadline;