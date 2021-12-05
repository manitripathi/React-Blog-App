import React from 'react';
import '../../style.css';
import FitnessCategory from './Fitness/FitnessCategory';

function Fitness(props) {
    return (
        <>
            <div className='NavbarInnerHeadings'>Fitness</div>
            <hr className='horizontalLineStyling'/>
            <FitnessCategory/>
        </>
    );
}

export default Fitness;