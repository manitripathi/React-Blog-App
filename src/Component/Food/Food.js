import React from 'react';
import '../../style.css';
import Navbar from '../Navbar/Navbar';
import FoodCategory from './Food/FoodCategory';
import SideArticle from '../SideArticle/SideArticle';
import SideLowerArticle from '../SideLowerArticle/SideLowerArticle';

function Food(props) {
    return (
        <>
        <Navbar/>
            <div className='NavbarInnerHeadings'>Food</div>
            <hr className='horizontalLineStyling'/>
            <div className='sideArticle'>
                <div><FoodCategory /></div>
                <div>
                <div><SideArticle/></div>
                <div><SideLowerArticle/></div>
                <div className='ads'><span className='text-ads'>Advertisement</span></div>
                </div>
            </div>
        </>
    );
}

export default Food;