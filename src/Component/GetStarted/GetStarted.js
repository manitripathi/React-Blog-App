import React from 'react';
import {Link} from 'react-router-dom';
import '../../style.css';

function GetStarted(props) {
    return (
        <div>
            <div className='GetStartedContainer'>
            <div className='TheSiren'>
            <div className='The'>The</div>
            <div className='Siren'>Siren</div>
            </div>
            <Link to='/login' className='link'>
            <div className='GetStarted'>Get Started</div>
            </Link>
        </div>
        </div>
    );
}

export default GetStarted;