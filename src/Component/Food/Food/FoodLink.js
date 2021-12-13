import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import clap from '../../ImagesFolder/clap.png';
import {FoodPost} from './Foodpost/FoodPost';
import Latest from '../../FrontPage/LatestStories/Latest';
import userImg from '../../ImagesFolder/userImg.png';
import '../../../style.css';
import GetStarted from '../../GetStarted/GetStarted';

function FoodLink(props) {

    const [claps,setClaps]=useState(0);

    let {id}=useParams();

    const [blog, setBlog] = useState('');

    useEffect(() => {
      let blog = FoodPost.find((blog) => blog.id === parseInt(id));
      if (blog) {
        setBlog(blog);
        console.log(blog);
      }
    },[id]);

    return (
        <>
        <GetStarted/>
        <hr style={{width:'100%'}}/>
        <div className='mainTechDiv'>
          <div className='Technology'>
            <div className='Technology-Heading'>{blog.content}</div>
            <div className='ProfileName'>
            <div className='flexArrangeUser'>
            <div>
                <div><img src={userImg} alt='' className='userImg'></img></div>
                <div>
                <div className='name'>Mani tripathi</div>
                <div className='date'>Jan 28,2019 - 10min Read</div>
                </div>
            </div>
            <div className="share-btns">
                <div style={{padding:'2px'}}><i className="fab fa-linkedin"></i></div>
                <div style={{padding:'2px'}}><i className="fab fa-facebook-square"></i></div>
                <div style={{padding:'2px'}}><i className="fab fa-twitter-square"></i></div>
                <div style={{padding:'2px'}}><i className="fab fa-twitter-square"></i></div>
              </div>
            </div>
            
                
            </div>
            <div className='bollyBogsDesc' >{blog.desc}</div>
            <div>{blog.content1}</div>
            <div className='text'>Let’s talk about them 😎</div>
            {/* <div><img src={codeImg} alt='' className='codeImg'></img></div> */}
            {/* <div className='ReactJsAnimation'>
                <div className='flex-skills'>React</div>
                <div className='flex-skills'>Javascipt</div>
                <div className='flex-skills'>Animation</div>
            </div> */}
            <div>
                <button onClick={()=>setClaps(prevClaps=>prevClaps+1)} className='likeBtn'><img src={clap} alt='' className='clapbtn'></img></button>
                <span>{claps} Claps</span>
            </div>
            <hr style={{opacity:0.4}}/>
            <div className='ProfileName'>
                {/* <div><img src={userImg} alt='' className='userImg'></img></div> */}
                <div>
                <div className='date'>Written by -</div>
                <div className='name'>Mani tripathi</div>
                <div className='date'>Jan 28,2019 - 10min Read</div>
                </div>
            </div>
            {/* <div className='MoreFromSiren'>
                <div className='MoreSiren'>More  From The Siren</div>
                <hr style={{opacity:0.4}}/>
                <Latest/>
            </div> */}
        </div>
        <div className='fixedPosition'>
            <div>
        <button onClick={()=>setClaps(prevClaps=>prevClaps+1)} className='likeBtn'><img src={clap} alt='' className='clapbtn'></img></button>
                <span>{claps} Claps</span>
        </div>
        <div><i className="fi fi-rr-share"></i><span>Share this article</span></div>
        </div>
        </div>
        <div className='MoreFromSiren'>
                <div className='MoreSiren'>More  From The Siren</div>
                <hr style={{opacity:0.4}}/>
                <Latest/>
            </div>
        </>
    );
}

export default FoodLink;