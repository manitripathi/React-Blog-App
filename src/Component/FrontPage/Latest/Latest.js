import React from 'react';
import JoshuaPic from './joshuaAdventureImg1.jpg';
import './Latest.css';
import { Link } from 'react-router-dom';

export default function Latest(){
    return(
        <div class='LatestMain'>
            <div className='LatestHeading'>The Latest</div>
            <hr className='hrLine1'/>
            <div className='LatestImg'>
                <div> 
                    <div><img src={JoshuaPic} className='JoshuaPic' alt=''></img></div>
                    <Link to ='./Home/Joshua'>
                    <div className='subHeading'>Joshua tree</div>
                    <div className='subHeading'>Overnight Adventure</div>
                    </Link>
                    <div className='content'>This is a desert so if your visit is during the summer, be prepared for some pretty serious heat. The name Joshua tree comes from the infamous trees that litter the entire desert. Joshua Trees were named after the biblical story of Joshua reaching up to god. It was said the tree looked like the character Joshua.</div>
                    <div className='dateTime'>
                        <span className='content1'>Travel</span>
                        <span className='content2'> / August 21,2017</span>
                    </div>
                </div>
                <div> 
                    <div><img src={JoshuaPic} className='JoshuaPic' alt=''></img></div>
                    <Link to ='./Home/Joshua'>
                    <div className='subHeading'>Joshua tree</div>
                    <div className='subHeading'>Overnight Adventure</div>
                    </Link>
                    <div className='content'>This is a desert so if your visit is during the summer, be prepared for some pretty serious heat. The name Joshua tree comes from the infamous trees that litter the entire desert. Joshua Trees were named after the biblical story of Joshua reaching up to god. It was said the tree looked like the character Joshua.</div>
                    <div className='dateTime'>
                        <span className='content1'>Travel</span>
                        <span className='content2'> / August 21,2017</span>
                    </div>
                </div>
                <div> 
                    <div><img src={JoshuaPic} className='JoshuaPic' alt=''></img></div>
                    <Link to ='./Home/Joshua'>
                    <div className='subHeading'>Joshua tree</div>
                    <div className='subHeading'>Overnight Adventure</div>
                    </Link>
                    <div className='content'>This is a desert so if your visit is during the summer, be prepared for some pretty serious heat. The name Joshua tree comes from the infamous trees that litter the entire desert. Joshua Trees were named after the biblical story of Joshua reaching up to god. It was said the tree looked like the character Joshua.</div>
                    <div className='dateTime'>
                        <span className='content1'>Travel</span>
                        <span className='content2'> / August 21,2017</span>
                    </div>
                </div>
            </div>
        </div>
    )
}