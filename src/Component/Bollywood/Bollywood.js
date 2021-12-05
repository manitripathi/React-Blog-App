import React from 'react';
import BollywoodCategory from './Bollywood/BollywoodCategory';
import '../../style.css';

function Bollywood(props) {

    return (
        <>
           
            <div className='NavbarInnerHeadings'>Bollywood</div>
            <hr className='horizontalLineStyling'/>
           
            <BollywoodCategory />
            
        </>
    );
}

export default Bollywood;