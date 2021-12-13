import React from 'react';
import '../../../style.css';
import TechnologyCategory from './TechnologyCategory';
import Navbar from '../../Navbar/Navbar';
import SideArticle from '../../SideArticle/SideArticle';
import SideLowerArticle from '../../SideLowerArticle/SideLowerArticle';

function Technology(props) {
    return (
        <>
        <Navbar/>
            <div className='NavbarInnerHeadings'>Technology</div>
            <hr className='horizontalLineStyling'/>
            <div className='sideArticle'>
                <div><TechnologyCategory /></div>
                <div>
                <div><SideArticle/></div>
                <div><SideLowerArticle/></div>
                <div className='ads'><span className='text-ads'>Advertisement</span></div>
                </div>
            </div>
        </>
    );
}

export default Technology;