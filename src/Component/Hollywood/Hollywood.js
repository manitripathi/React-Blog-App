import React from 'react';
import HollywoodCategory from './Hollywood/HollywoodCategory';
import '../../style.css';

function Hollywood(props) {
    return (
        <>
            <div className='NavbarInnerHeadings'>Hollywood</div>
            <hr className='horizontalLineStyling'/>
            <HollywoodCategory/>
        </>
    );
}

export default Hollywood;