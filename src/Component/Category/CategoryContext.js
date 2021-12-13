import React, { useState, useContext} from "react";
import TopPost from "../TopPost/TopPost";
import "./Category.css";
import { BlogContext } from './Category';
import { Link } from "react-router-dom";
import SnapFlex from '../FrontPage/Home/pic1.jpg';


const CategoryContext = (props) => {

console.warn(props);

  // const [post,setPost]=useState({});

  // useEffect(()=>{
  //   const blogId=props.match.params.postId;
  //   console.log(blog);
  //   blog.find(post=>post.id==blogId);
  //   setPost(post);
  // });

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
                <div className="bollyBogsDesc">{bollyBogs.desc}</div>
                <div>
                <Link to={`/Category/${bollyBogs.id}`} className="link">
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
        <Link to ='/Home/pic1'>
          <div><img src={SnapFlex} alt='' className="SnapFlex1"></img></div>
        </Link>
        
      </div>
      
      <div>
        <div>
       <div className='ads'><span className='text-ads'>Advertisement</span></div>
     </div>
     <div><TopPost/></div>
      </div>
     
      
    </div>
    
  );
};
export default CategoryContext;
