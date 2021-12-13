import React, {createContext } from 'react';
import { FoodPost} from './Foodpost/FoodPost';
import FoodContext from './FoodContext';

export const FoodyContext=createContext();

const FoodCategory=(props)=> {
 console.log(props)
  return (
    <div className='Category'>
      <FoodyContext.Provider value={FoodPost}>
        <FoodContext />
      </FoodyContext.Provider>
    </div>
    
  );
}
export default FoodCategory;