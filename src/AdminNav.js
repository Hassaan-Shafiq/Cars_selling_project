
import React, { Component } from 'react';

import image from './images/logo.png';

import { AiFillSetting } from 'react-icons/ai';
import image2 from './images/icon.png';
import { Link } from "react-router-dom";
import Signupform from './Signupform';
import Loginform from './Loginform';
import { propTypes } from 'react-bootstrap/esm/Image';

const AdminNav = (props) => {
  return (

    <div>
            {/* Left side */}
        <div className="row bg-primary"  style={{ height: 110 }}>
          <div className="col-sm-3 col-md-3 " >
            <img src={image} alt="Logo" style={{ height: 110,  marginTop: "0px", width:332}}  ></img>
        </div>
           
           {/* Center name of page */}
              <div className="col-sm-3 col-md-4 ">   
                 <h1 style={{marginTop: 30,}} ><b><text style={{ color:"white",fontFamily:"a",float:"right"}}>{props.createState}</text></b></h1>
                </div>
       
       
                <div className="col-sm-3 col-md-5 " >   
                 <a href={"https://www.google.com/"} > <button style={{marginTop:40,backgroundColor:'Transparent',borderColor:'Transparent',
                    marginLeft:180}}>
                    <b style={{color:"white"}}><h4>Help?</h4></b></button></a>
               
                    <button style={{marginTop:40,backgroundColor:'Transparent',borderColor:'Transparent',
                      marginLeft:20 }}>
                    <b style={{color:"white"}}><h4>Settings<AiFillSetting/></h4></b></button>
               

                    {/* Round button */}
                    <button type="button" class="btn btn-primary "
                  data-toggle="dropdown" style={{ 
                    borderWidth:1,
                    borderColor:'rgba(0,0,0,0.2)',
                    alignItems:'center',
                    justifyContent:'center',
                    width:90, 
                    height:90,marginLeft:20,
                    backgroundColor:'#fff',
                    borderRadius:50 
                 }} > <img src={image2} alt="Logo" style={{height :60 , width:60 , marginLeft:-19,
                 borderRadius: 70}} ></img>
                 
                </button>
                 </div>
       
       
               </div>
        </div>
  );
}

export default AdminNav;