import React, {createContext } from 'react';
import { FitnessPost} from './Fitnesspost/FitnessPost';
import FitnessContext from './FitnessContext';

export const FitContext=createContext();

const FitnessCategory=(props)=> {
 console.log(props)
  return (
    <div className='Category'>
      <FitContext.Provider value={FitnessPost}>
        <FitnessContext />
      </FitContext.Provider>
    </div>
    
  );
}
export default FitnessCategory;