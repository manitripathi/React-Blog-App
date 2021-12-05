import React from "react";
import './Navbar.css';
import { Link,Switch,Route } from "react-router-dom";
import Home from '../FrontPage/Home/Home';
// import Category from "../Category/Category";
import Technology from "../Technology/Technology";
import Bollywood from '../Bollywood/Bollywood';
import Hollywood from "../Hollywood/Hollywood";
import Fitness from "../Fitness/Fitness";
import Food from "../Food/Food";
import BollywoodLink from "../Bollywood/Bollywood/BollywoodLink";
import HollywoodLink from "../Hollywood/Hollywood/HollywoodLink";
import FitnessLink from "../Fitness/Fitness/FitnessLink";
import FoodLink from "../Food/FoodLink";
import LatestLink from "../FrontPage/Latest/LatestLink";

export default function Navbar(){
    const navbar=[
        {to:'/', desc:'Home', id:1,},
        {to:'/Bollywood', desc:'Bollywood', id:2,},
        {to:'/Technology', desc:'Technology', id:3},
        {to:'/Hollywood', desc:'Hollywood', id:4,},
        {to:'/Fitness', desc:'Fitness', id:5},
        {to:'/Food', desc:'Food', id:6},
    ];
    const navbarLink= navbar.map((value,index)=>(
        <Link to={value.to} key={index}  className='link' >
            {value.desc}
        </Link>
    ));
    return(
        <div>
            <div className='TheSiren'>
            <div className='The'>The</div>
            <div className='Siren'>Siren</div>
        </div>
        {/* <div className='NavbarOptions'>
            <div><Link to='/' className='link'>Home</Link></div>
            <div><Link to='/Bollywood' className='link'>Bollywood</Link></div>
            <div><Link to='/Technology' className='link'>Technology</Link></div>
            <div><Link to='/Hollywood' className='link'>Hollywood</Link></div>
            <div><Link to='/Fitness' className='link'>Fitness</Link></div>
            <div><Link to='/Food' className='link'>Food</Link></div>
        </div> */}
        <div className='NavbarOptions'>{navbarLink}</div>
        <hr className='hrLine'/>
        <Switch>
            <Route path='/' component={Home} exact></Route>
            {/* <Route path='/:category/:id' render={blog=><Category{...blog}/>} exact></Route> */}
            <Route path='/Bollywood' component={Bollywood} exact></Route>
            <Route path='/Technology' component={Technology} exact></Route>
            <Route path='/Hollywood' component={Hollywood} exact></Route>
            <Route path='/Fitness' component={Fitness} exact></Route>
            <Route path='/Food' component={Food} exact></Route>
            <Route path='/Bollywood/BollywoodLink' component={BollywoodLink} exact></Route>
            <Route path='/Hollywood/hollywoodLink' component={HollywoodLink} exact></Route>
            <Route path='/Fitness/FitnessLink' component={FitnessLink} exact></Route>
            <Route path='/Food/FoodLink' component={FoodLink} exact></Route>
            <Route path='/Home/Joshua' component={LatestLink} exact></Route>
        </Switch>
        </div>
    );
}