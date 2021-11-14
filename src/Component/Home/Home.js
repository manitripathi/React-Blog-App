import React from "react";
import './Home.css';
import Snap1 from "./pic1.jpg";
import Snap2 from './pic2.jpg';

export default function Home(){
    return(
        <div className='images'>
            <div className='img1'><img src={Snap1} className='snap1' alt=''/>
                <span className='imgText1'>Title of vertical gallery</span>
            </div>
            <div className='img2'><img src={Snap2} className='snap snap2' alt=''/></div>
            <div className='img3'><img src={Snap2} className='snap snap3' alt=''/></div>
        </div>
    );
}