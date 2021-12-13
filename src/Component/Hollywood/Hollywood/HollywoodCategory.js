import React, {createContext } from 'react';
import { HollywoodPost} from './Hollypost/HollywoodPost';
import HollywoodContext from './HollywoodContext';

export const HollyContext=createContext();

const HollywoodCategory=(props)=> {
 console.log(props)
  return (
    <div className='Category'>
      <HollyContext.Provider value={HollywoodPost}>
        <HollywoodContext />
      </HollyContext.Provider>
    </div>
    
  );
}
export default HollywoodCategory;