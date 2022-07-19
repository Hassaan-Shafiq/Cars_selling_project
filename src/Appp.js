import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Buyy from './Buyy';
import Matchh from './Matchh';



class Appp extends Component {
    state = {

        price:"1265000"
      } 

       brokerPrice=()=>{
              return("Usaid sab ana wa web ki tyari krka top krna ka plain krta hua")
       }


    render() { 
        return (

            <div>
 
               
              <Link to='/buy'><h1>Click me to go to buy component</h1></Link>
              <Link to='/match'><h1>Click me to go to match component</h1> </Link>        
              
              
                 </div>
        );
    }
}
 
export default Appp;