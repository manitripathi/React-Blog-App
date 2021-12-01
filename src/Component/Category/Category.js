import React, {createContext } from "react";
import { blog } from "../BlogContent/BlogContent";
import CategoryContext from "./CategoryContext";

export const BlogContext=createContext();

const Category=()=> {

  return (
    <div className='Categrory'>
      <BlogContext.Provider value={blog}>
        <CategoryContext/>
      </BlogContext.Provider>
    </div>
  );
}
export default Category;