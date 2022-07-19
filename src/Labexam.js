import React, { Component } from 'react';
import Labnav from './Labnav';

import { Link } from "react-router-dom";

import image2 from './images/main_img1.jpg';
class Labexam extends Component {
    state = {  } 
    render() { 
        return (

       <div style={{backgroundColor:"skyblue"}}>
          

           <div className='container'>
          

           <div className='row'>
            <div className='col-sm-6 col-md-6' >

             <center>
               <div style={{marginTop:200}}>
                <h1 style={{color:"green"}}>
                  <b>Fresh Food</b>
                </h1>
                 <h3>Our food is very amazing Our food is very amazing Our food is very amazing
                 Our food is very amazing Our food is very amazing Our food is very amazing Our food is very amazing
                 </h3>
                 <Link to="/Menu" > <button type="button" class="btn "
                 style={{borderRadius:"25px"}} >Button</button></Link>
                </div>
             </center>
            </div>

            <div className='col-sm-6 col-md-6' >

             <center>
             <img src={image2} alt="Logo" style={{height :500 , width:530}}  ></img>
             </center>
            </div>

           </div>
           </div>
       </div>

        );
    }
}
 
export default Labexam;