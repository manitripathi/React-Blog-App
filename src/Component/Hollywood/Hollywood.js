import React from 'react';
import HollywoodCategory from './Hollywood/HollywoodCategory';
import '../../style.css';
import Navbar from '../Navbar/Navbar';
import SideArticle from '../SideArticle/SideArticle';
import SideLowerArticle from '../SideLowerArticle/SideLowerArticle';

function Hollywood(props) {
    return (
        <>
        <Navbar/>
            <div className='NavbarInnerHeadings'>Hollywood</div>
            <hr className='horizontalLineStyling'/>
            <div className='sideArticle'>
                <div><HollywoodCategory /></div>
                <div>
                <div><SideArticle/></div>
                <div><SideLowerArticle/></div>
                <div className='ads'><span className='text-ads'>Advertisement</span></div>
                </div>
            </div>
        </>
    );
}

export default Hollywood;