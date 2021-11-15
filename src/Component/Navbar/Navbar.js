import React from "react";
import './Navbar.css';
import { Link,Switch,Route } from "react-router-dom";
import Home from "../Home/Home";

export default function Navbar(){
    return(
        <div>
            <div className='TheSiren'>
            <div className='The'>The</div>
            <div className='Siren'>Siren</div>
        </div>
        <div className='NavbarOptions'>
            <div><Link to='/' className='link'>Home</Link></div>
            <div><Link to='/Bollywood' className='link'>Bollywood</Link></div>
            <div><Link to='/Technology' className='link'>Technology</Link></div>
            <div><Link to='/Hollywood' className='link'>Hollywood</Link></div>
            <div><Link to='/Fitness' className='link'>Fitness</Link></div>
            <div><Link to='/Food' className='link'>Food</Link></div>
        </div>
        <hr className='hrLine'/>
        <Switch>
            <Route path='/' component={Home}></Route>
        </Switch>
        </div>
    );
}