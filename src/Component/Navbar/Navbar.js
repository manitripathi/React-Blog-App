import React from "react";
import './Navbar.css';
import { Link} from "react-router-dom";
import '../../style.css';

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
        <div className='NavbarOptions'>{navbarLink}</div>
        <hr className='hrLine'/>
        </div>
    );
}