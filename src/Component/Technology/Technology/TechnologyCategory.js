import React, {createContext } from 'react';
import { TechnologyPost} from './TechnologyPost/TechnologyPost';
import TechnologyContext from './TechnologyContext';

export const TechContext=createContext();

const TechnologyCategory=(props)=> {
 console.log(props)
  return (
    <div className='Category'>
      <TechContext.Provider value={TechnologyPost}>
        <TechnologyContext />
      </TechContext.Provider>
    </div>
    
  );
}
export default TechnologyCategory;