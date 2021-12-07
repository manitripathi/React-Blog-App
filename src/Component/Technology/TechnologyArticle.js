import React, { useState} from 'react';
import './Technology.css';
import userImg from './userImg.png';
import reactCoverImg from './reactCoverImg.png';
import codeImg from './codeImg.png';
import clap from './clap.png';
import Latest from '../FrontPage/Latest/Latest';

function TechnologyArticle(){
    const [claps,setClaps]=useState(0);
    /* const [mclaps,setMClaps]=useState(0); */

    return(
        <div className='mainTechDiv'>
          <div className='Technology'>
            <div className='Technology-Heading'>5 ways to animate a React app</div>
            <div className='ProfileName'>
                <div><img src={userImg} alt='' className='userImg'></img></div>
                <div>
                <div className='name'>Mani tripathi</div>
                <div className='date'>Jan 28,2019 - 10min Read</div>
                </div>
            </div>
            <div><img src={reactCoverImg} alt='' className='reactCoverImg'></img></div>
            <div>Animation in ReactJs app is a popular topic and there are many ways to create different types of animations.Many developers create animation exclusively using css and adding classes to HTML tags. This is a great way and you should use it. If you want to create complex animations you can pay attention to GreenSock. GreenSock is the most powerful animation platform. There are also a lot of libraries, components for creating animation in React.</div>
            <div className='text'>Let’s talk about them 😎</div>
            <div><img src={codeImg} alt='' className='codeImg'></img></div>
            <div className='ReactJsAnimation'>
                <div className='flex-skills'>React</div>
                <div className='flex-skills'>Javascipt</div>
                <div className='flex-skills'>Animation</div>
            </div>
            <div>
                <button onClick={()=>setClaps(prevClaps=>prevClaps+1)} className='likeBtn'><img src={clap} alt='' className='clapbtn'></img></button>
                <span>{claps} Claps</span>
            </div>
            <hr style={{opacity:0.4}}/>
            <div className='ProfileName'>
                <div><img src={userImg} alt='' className='userImg'></img></div>
                <div>
                <div className='date'>Written by -</div>
                <div className='name'>Mani tripathi</div>
                <div className='date'>Jan 28,2019 - 10min Read</div>
                </div>
            </div>
            <div className='MoreFromSiren'>
                <div style={{fontWeight:500}}>More  From The Siren</div>
                <hr style={{opacity:0.4}}/>
                <Latest/>
            </div>
        </div>
        <div className='ClapBtn'>
        <button onClick={()=>setClaps(prevClaps=>prevClaps+1)} className='likeBtn'><img src={clap} alt='' className='clapbtn'></img></button>
                <span>{claps} Claps</span>
        </div>
        </div>
    )
}
export default TechnologyArticle;