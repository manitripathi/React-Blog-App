import React from 'react';
import '../../../style.css';
import TechnologyCategory from './TechnologyCategory';

function Technology(props) {
    return (
        <>
            <div className='NavbarInnerHeadings'>Technology</div>
            <hr className='horizontalLineStyling'/>
            <TechnologyCategory/>
        </>
    );
}

export default Technology;