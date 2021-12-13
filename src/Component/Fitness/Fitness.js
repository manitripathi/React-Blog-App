import React from 'react';
import '../../style.css';
import FitnessCategory from './Fitness/FitnessCategory';
import Navbar from '../Navbar/Navbar';
import SideArticle from '../SideArticle/SideArticle';
import SideLowerArticle from '../SideLowerArticle/SideLowerArticle';

function Fitness(props) {
    return (
        <>
        <Navbar/>
            <div className='NavbarInnerHeadings'>Fitness</div>
            <hr className='horizontalLineStyling'/>
            <div className='sideArticle'>
                <div><FitnessCategory /></div>
                <div>
                <div><SideArticle/></div>
                <div><SideLowerArticle/></div>
                <div className='ads'><span className='text-ads'>Advertisement</span></div>
                </div>
            </div>
        </>
    );
}

export default Fitness;