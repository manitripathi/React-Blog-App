import React, {createContext } from "react";
import { blog } from "../BlogContent/BlogContent";
import CategoryContext from "./CategoryContext";

export const BlogContext=createContext();

const Category=(props)=> {
 console.log(props)
  return (
    <div className='Category'>
      <BlogContext.Provider value={blog}>
        <CategoryContext />
      </BlogContext.Provider>
    </div>
    
  );
}
export default Category;