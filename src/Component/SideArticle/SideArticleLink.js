import React,{useState} from "react";
import JoshuaPic from './joshuaAdventureImg1.jpg';
import clap from '../../ImagesFolder/clap.png';
import userImg from '../../ImagesFolder/userImg.png';
import GetStarted from '../../GetStarted/GetStarted';

function SideArticleLink(props) {
  const [claps,setClaps]=useState(0);

    /* let {id}=useParams();

    const [blog, setBlog] = useState('') */;

    /* useEffect(() => {
      let blog = FitnessPost.find((blog) => blog.id === parseInt(id));
      if (blog) {
        setBlog(blog);
        console.log(blog);
      }
    },[id]); */

    return (
        <>
        <GetStarted/>
        <hr style={{width:'100%'}}/>
        <div className='mainTechDiv'>
          <div className='Technology'>
            <div className='Technology-Heading'>Joshua tree</div>
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
            <div className='bollyBogsDesc' ><img src={JoshuaPic} alt='' className="JoshuaPic"></img></div>
            <div>This is a desert so if your visit is during the summer, be prepared for some pretty serious heat. The name Joshua tree comes from the infamous trees that litter the entire desert. Joshua Trees were named after the biblical story of Joshua reaching up to god. It was said the tree looked like the character Joshua.</div>
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
        {/* <div className='MoreFromSiren'>
                <div className='MoreSiren'>More  From The Siren</div>
                <hr style={{opacity:0.4}}/>
                <Latest/>
            </div> */}
        </>
    );
}export default SideArticleLink;
