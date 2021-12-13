import React, { useState, useContext} from "react";
// import TopPost from '../../TopPost/TopPost';
import "../../Category/Category.css";
import { HomeSubContext } from "./HomeCategory";
import { Link } from "react-router-dom";
import SnapFlex from './pic1.jpg';

const HomeContext = (props) => {

console.warn(props);

  const [visibleBlogs, setVisibleBlogs] = useState(2);

  /* const handleClick = () => {
    setVisibleBlogs((prevVisibleBlogs) => prevVisibleBlogs + 4);
  }; */

  const HomeBlogs = useContext(HomeSubContext);

  return (
    
    <div className="Category">
      <div className="bollywood">
      <div className="flex">
      <Link to='/Home/pic1'>
      <div><img src={SnapFlex} alt='' className="SnapFlex"></img></div>
      </Link>
      <div>
        {HomeBlogs.slice(0, visibleBlogs).map((bollyBogs) => (
          <div key={bollyBogs.id}>
            {/* <div>
              <div className="descContent">
                <div>{bollyBogs.desc}</div>
                <div>
                <Link to={`/Home/${bollyBogs.id}`} className="link">
                  <div className="subHeading">{bollyBogs.content}</div>
                  </Link>
                  <div className="content">{bollyBogs.content1}</div>
                  <div>
                    <span className="content1">{bollyBogs.content2}</span>
                    <span className="content2">{bollyBogs.content3}</span>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <hr style={{ opacity: 0.2 }} /> */}
            <div className='images'>
            <Link to={`/Home/${bollyBogs.id}`} className="link">
            <div className='img1' id='imgFlex'>{bollyBogs.desc}
                <div className='imgText11'>{bollyBogs.content2}</div>
                <div className='imgText12'>{bollyBogs.content3}</div>
               
            </div>
             </Link>
            </div>
            
            </div>
         
        ))}
      </div>
      </div>
      </div>
      {/* <div className='TopPost-flex'>
        <TopPost />
      </div> */}
    </div>
    
  );
};
export default HomeContext; 
