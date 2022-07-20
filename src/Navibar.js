import React, { Component } from 'react';
import image from './images/logo.png';
import { Link } from "react-router-dom";
import Signupform from './Signupform';
import Loginform from './Loginform';
import {
  BrowserRouter ,
  Routes,
  Route,
  Redirect,
} from "react-router-dom"


class Navibar extends Component {
    state = {  } 
    render() { 
        return (
            <div >
                {/* Navigation Bar */}
                 
                <nav className="navbar navbar-dark bg-primary" style={{height : 110}}>
                
                
                <div className="row">
                 <div className="col-med-12 col-sm-12">   
                 <Link to="/newCars" > <button type="button" class="btn btn-primary" >New Cars</button></Link> 
                <Link to="/usedCars" > <button type="button" class="btn btn-primary" >Used Cars</button></Link> 
               <Link to="/bikes" ><button type="button" class="btn btn-primary" >Bikes</button></Link> 
               <Link to="/autoparts" > <button type="button" class="btn btn-primary" >AutoParts</button></Link>
               <Link to="/Signupform" >  <button type="button" class="btn btn-primary"  >SignUp</button></Link> 
                 <Link to="/Loginform" ><button type="button" class="btn btn-primary" >Login</button></Link> 
               
                </div>
                
                 <div className="col-med-4"> 
               
                 
                 </div></div>
               
                  </nav> </div>
                

                
                
        );
    }
}
 
export default Navibar;