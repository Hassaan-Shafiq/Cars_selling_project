import React, { Component } from 'react';

import image2 from './images/img2.jpg';
import { Link } from "react-router-dom";


import { AiOutlineShoppingCart } from 'react-icons/ai';

class Labnav extends Component {
    state = {  } 
    render() { 
        return (
            <div className='container'>
           <div className='row'><div className=' col-12'>
            <nav className="navbar navbar" style={{height : 110}}>
                
                <div className="row">
                 <div className="col-med-3" >
                 <h1 style={{color:"green"}}>
                  <b>Fresh Food</b>
                </h1>
                </div> </div>
                
                <div className="row">
                 <div className="col-med-3">   
                 <Link to="/Home" > <button type="button" class="btn " >Home</button></Link> 
                <Link to="/about" > <button type="button" class="btn " >About</button></Link> 
               <Link to="/contact" ><button type="button" class="btn " >Contact</button></Link> 
               <Link to="/menu" > <button type="button" class="btn " >Menu</button></Link>
                </div></div>
                <AiOutlineShoppingCart />
               
                  </nav></div></div>
            </div>
        );
    }
}
 
export default Labnav;