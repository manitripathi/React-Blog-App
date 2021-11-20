import React from 'react';
import BollySnaps from './bollysnaps.jpg';
import './Category.css';

export default function Category(){
    const blog=[
        {id:2, title:'Bollywood',desc:<img src={BollySnaps} alt="" className='BollySnaps'/>},
    ];
    
    return(
        <div>
            <div className='bollywood'>
                {blog.map((bollyBogs)=>(
                    <div key={bollyBogs.id}>
                    <div>{bollyBogs.title}</div>
                    <hr/>
                    <div>{bollyBogs.desc}</div>
                </div>
                ))}
            </div>
        </div>
    );
}