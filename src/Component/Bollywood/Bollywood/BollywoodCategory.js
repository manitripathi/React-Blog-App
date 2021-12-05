import React, {createContext } from 'react';
import { BollywoodPost} from './BollywoodPost';
import BollywoodContext from './BollywoodContext';

export const BollyContext=createContext();

const BollywoodCategory=(props)=> {
 console.log(props)
  return (
    <div className='Category'>
      <BollyContext.Provider value={BollywoodPost}>
        <BollywoodContext />
      </BollyContext.Provider>
    </div>
    
  );
}
export default BollywoodCategory;