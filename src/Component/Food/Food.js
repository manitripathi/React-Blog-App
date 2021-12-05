import React from 'react';
import Category from '../Category/Category';
import '../../style.css';

function Food(props) {
    return (
        <>
            <div className='NavbarInnerHeadings'>Food</div>
            <hr className='horizontalLineStyling'/>
            <Category/>
        </>
    );
}

export default Food;