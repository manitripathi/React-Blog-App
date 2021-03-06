import React,{useContext } from 'react';
import './TopPost.css';
import { BlogContext } from '../Category/Category';
import { Link } from "react-router-dom";

function TopPost(blog) {

    const blogs = useContext(BlogContext);

    return (
        <div className="TopPostContent">
        <div className='TopPosts'>Top Posts</div>
        <hr className='horizontalLine'/>
      <div className="bollywood">
        {blogs.slice(2,6).map((bollyBogs) => (
          <div key={bollyBogs.id}>
            <div>
              <div className='BollywoodHeading'>{bollyBogs.title}</div>

              <div className="descContent">
                <div>{bollyBogs.desc}</div>
                <div>
                <Link to={`/Food/${bollyBogs.id}`} className='link'>
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
      </div>
      {/* <div className='ads'><span className='text-ads'>Advertisement</span></div> */}
    </div>
    );
}

export default TopPost;