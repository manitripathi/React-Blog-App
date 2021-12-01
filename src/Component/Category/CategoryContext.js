import React, { useState, useContext } from "react";
import TopPost from "../TopPost/TopPost";
import "./Category.css";
import { BlogContext } from './Category';

const CategoryContext = () => {
  const [visibleBlogs, setVisibleBlogs] = useState(3);

  const handleClick = () => {
    setVisibleBlogs((prevVisibleBlogs) => prevVisibleBlogs + 4);
  };

  const blogs = useContext(BlogContext);

  return (
    <div className="Category">
      <div className="bollywood">
        {blogs.slice(0, visibleBlogs).map((bollyBogs) => (
          <div key={bollyBogs.id}>
            <div>
              <div className='BollywoodHeading'>{bollyBogs.title}</div>

              <div className="descContent">
                <div>{bollyBogs.desc}</div>
                <div>
                  <div className="subHeading">{bollyBogs.content}</div>
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
     
      <div className='TopPost-flex'>
        <TopPost />
      </div>
    </div>
  );
};
export default CategoryContext;
