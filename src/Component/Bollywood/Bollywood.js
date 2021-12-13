import React from 'react';
import BollywoodCategory from './Bollywood/BollywoodCategory';
import '../../style.css';
import Navbar from '../Navbar/Navbar';
import SideArticle from '../SideArticle/SideArticle';
import SideLowerArticle from '../SideLowerArticle/SideLowerArticle';

function Bollywood(props) {

    return (
        <>
           <Navbar/>
            <div className='NavbarInnerHeadings'>Bollywood</div>
            <hr className='horizontalLineStyling'/>
            <div className='sideArticle'>
                <div><BollywoodCategory /></div>
                <div>
                <div><SideArticle/></div>
                <div><SideLowerArticle/></div>
                <div className='ads'><span className='text-ads'>Advertisement</span></div>
                </div>
            </div>
            
            
        </>
    );
}

export default Bollywood;