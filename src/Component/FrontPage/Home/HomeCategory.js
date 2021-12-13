import React, {createContext } from 'react';
import { FitnessPost} from '../../Fitness/Fitness/Fitnesspost/FitnessPost';
import HomeContext from './HomeContext';

export const HomeSubContext=createContext();

const HomeCategory=(props)=> {
 console.log(props)
  return (
    <div className='Category'>
      <HomeSubContext.Provider value={FitnessPost}>
        <HomeContext />
      </HomeSubContext.Provider>
    </div>
    
  );
}
export default HomeCategory;