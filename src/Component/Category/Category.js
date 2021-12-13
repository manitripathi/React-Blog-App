import React, {createContext } from "react";
import { Blog } from "./BlogContent/BlogContent";
import CategoryContext from "./CategoryContext";

export const BlogContext=createContext();

const Category=(props)=> {
 console.log(props)
  return (
    <>
    <div className='NavbarInnerHeadings'>Latest Articles</div>
            <hr className='horizontalLineStyling'/>
    <div className='Category'>
      <BlogContext.Provider value={Blog}>
        <CategoryContext />
      </BlogContext.Provider>
    </div>
    
    </>
  );
}
export default Category;