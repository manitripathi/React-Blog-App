import React from "react";
import './Navbar.css';
import { Link,Switch,Route } from "react-router-dom";
import Home from '../FrontPage/Home/Home';
import Category from "../Category/Category";
import Technology from "../Technology/Technology";

export default function Navbar(){
    const navbar=[
        {to:'/', desc:'Home', id:1,},
        {to:'/category/Bollywood', desc:'Bollywood', id:2,},
        {to:'/Technology', desc:'Technology', id:3},
        {to:'/category/Hollywood', desc:'Hollywood', id:4,},
        {to:'/category/Fitness', desc:'Fitness', id:5},
        {to:'/category/Food', desc:'Food', id:6},
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
            <Route path='/:category/:id' component={Category} exact></Route>
            <Route path='/Technology' component={Technology} exact></Route>
        </Switch>
        </div>
    );
}