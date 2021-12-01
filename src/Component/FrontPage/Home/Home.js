import React from "react";
import './Home.css';
import Snap1 from "./pic1.jpg";
import Snap2 from './pic2.jpg';
import Latest from "../Latest/Latest";
/* import TopPost from "../../TopPost/TopPost";
import { BlogContext } from '../../Category/Category'; */
import Category from "../../Category/Category";

export default function Home(){
 
    /* const blogs = useContext(BlogContext); */

    return(
        <div>
        <div className='images'>
            <div className='img1'><img src={Snap1} className='snap1' alt=''/>
                <div className='imgText11'>Title of vertical gallery</div>
                <div className='imgText12'>Travel/August 21, 2017</div>
            </div>
            <div className='img2'><img src={Snap2} className='snap snap2' alt=''/>
                <div className='imgText21'>The Sound cloud</div>
                <div className='imgText22'>You loved id doomed</div>
                <div className='imgText23'>Travel/August 21, 2017</div> 
            </div>
            <div className='img3'><img src={Snap2} className='snap snap3' alt=''/>
                <div className='imgText21'>The Sound cloud</div>
                <div className='imgText22'>You loved id doomed</div>
                <div className='imgText23'>Travel/August 21, 2017</div>
            </div>
            </div>
            <Latest/>
            <div className='LatestArticles'>
            <div className='LatestArticlesHeading'>Latest Articles</div>
            <hr className='hrLine-LatestArticle'/>
                <Category/>
            </div>
        </div>
    );
}