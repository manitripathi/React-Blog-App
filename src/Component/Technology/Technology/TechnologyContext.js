import React, { useState, useContext} from "react";
// import TopPost from '../../TopPost/TopPost';
import "../../Category/Category.css";
import { TechContext } from "./TechnologyCategory";
import { Link } from "react-router-dom";


const TechnologyContext = (props) => {

console.warn(props);

  const [visibleBlogs, setVisibleBlogs] = useState(3);

  const handleClick = () => {
    setVisibleBlogs((prevVisibleBlogs) => prevVisibleBlogs + 4);
  };

  const TechnologyBlogs = useContext(TechContext);

  return (
    
    <div className="Category">
      <div className="bollywood">
        {TechnologyBlogs.slice(0, visibleBlogs).map((bollyBogs) => (
          <div key={bollyBogs.id}>
            <div>
              <div className="descContent">
                <div>{bollyBogs.desc}</div>
                <div>
                <Link to='/Technology/TechnologyArticle'>
                  <div className="subHeading">{bollyBogs.content}</div>
                  </Link>
                  <div className="content">{bollyBogs.content1}</div>
                  <div>
                    <span className="content1">{bollyBogs.content2}</span>
                    <span className="content2">{bollyBogs.content3}</span>
                  </div>
                </div>
              </div>
            </div>
            <hr style={{ opacity: 0.2 }} />
          </div>
        ))}
        <button type="button" onClick={handleClick}>
          <i className="fi fi-rr-arrow-down"></i> Load more
        </button>
      </div>
     
      {/* <div className='TopPost-flex'>
        <TopPost />
      </div> */}
    </div>
    
  );
};
export default TechnologyContext;
