import React from "react";
import './Home.css';
import HomeCategory from "./HomeCategory";
import Navbar from "../../Navbar/Navbar";
import Latest from '../LatestStories/Latest';
import Category from "../../Category/Category";
import LastArticle from "../LastArticle/LastArticle";

export default function Home(){
    
    return(
        <div>
        
        {/* <div className='images'>
            <div className='img1'>l
                <div className='imgText11'>Title of vertical gallery</div>
                <div className='imgText12'>Travel/August 21, 2017</div>
            </div>
            <div className='img2'>3
                <div className='imgText21'>The Sound cloud</div>
                <div className='imgText22'>You loved id doomed</div>
                <div className='imgText23'>Travel/August 21, 2017</div> 
            </div>
            <div className='img3'>2
                <div className='imgText21'>The Sound cloud</div>
                <div className='imgText22'>You loved id doomed</div>
                <div className='imgText23'>Travel/August 21, 2017</div>
            </div>
            </div> */}
            <Navbar/>
            <HomeCategory/>

            <Latest/>
            <Category/>
            <LastArticle/>
            {/* <div className='LatestArticles'>
            <div className='LatestArticlesHeading'>Latest Articles</div>
            <hr className='hrLine-LatestArticle'/>
                <Category/>
            </div> */}
        </div>
    );
}