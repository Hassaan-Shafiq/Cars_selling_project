import React, { Component } from 'react';
import Navibar from './Navibar';
import Caroslee from './Caroslee';
import SearchBar from './SearchBar';
import image1 from './images/Audi.png';
import image2 from './images/BMW.png';
import image3 from './images/Changan.png';
import image4 from './images/Honda.png';
import image5 from './images/hyundai.png';
import image6 from './images/Isuzu.png';
import image7 from './images/proton.png';
import image8 from './images/Suzuki.png';
import image9 from './images/Tyota.png';
import image10 from './images/MG.png';
import image11 from './images/United.png';
import image12 from './images/DFSK.png';
import image13 from './images/porche.png';
import image14 from './images/mercedes.png';
import UserCard from './UserCard';
import UserFooter from './UserFooter';
import { Route, Routes } from 'react-router-dom';
import Signupform from './Signupform';
import UserNewCar from './UserNewCar';

class UserHome extends Component {
    state = {  
        hatchbackName :"Cultus",
        hatchbackDescription: "Suzuki`s 1,000cc hatchback Cultus is the best selling Hatchback in Pakistan with 24,509 units sold in 2022.",
        hatchback_pic :  require("./images/cultus.jpg"),  
    
    
        sedanName :"Civic",
        sedanDescription: "Honda Civic is the best selling sedan in Pakistan with 15,800 units sold in 2022.It is famous for its luxuorius style",
        sedan_pic :  require("./images/civic.jpg"),  
   
        offroadName :"Toyota Revo",
        offroadDescription: "Toyota Revo is the best selling 4x4 truck in Pakistan with 10,100 units sold in 2022.It is the best offroading trucks.",
        offroad_pic :  require("./images/Hilux.jpg"),  
   
        MinijeepName :"Honda BRV",
        MinijeepDescription: "Honda BRV is the best selling mini cruiser in Pakistan with 23,400 units sold in 2022.It is famous for its  style.",
        Minijeep_pic :  require("./images/hondabrv.jpg"),  

   
    } 
    render() { 
        return (

            <div style={{backgroundColor:"skyblue"}}>
             {/* Navigation Bar */}
              
               {/* Carousal */}
                <Caroslee/>
                <br/><br/>
                {/* Car Brands */}
                <h3 style={{marginLeft : "30px",fontFamily:"a"}} ><b> Pakistan best selling car brands</b></h3> 
                <a href={"https://www.audi.com.pk/sea/web/pk.html"}>
             <button style={{marginLeft : "30px"}} >  <img src={image1} alt="Logo"  ></img> </button></a>
             
             <a href={"https://www.bmw-pakistan.com/"}><button style={{marginLeft : "30px"}}>  <img src={image2} alt="Logo" href={"https://www.audi.com.pk/sea/web/pk.html"}   ></img> </button></a>
             <a href={"https://changan.com.pk/"}> <button style={{marginLeft : "30px"}}>  <img src={image3} alt="Logo"   ></img> </button></a>
             <a href={"https://www.honda.com.pk/"}> <button style={{marginLeft : "30px"}}>  <img src={image4} alt="Logo"   ></img> </button></a>
             <a href={"https://www.hyundai-nishat.com/"}>  <button style={{marginLeft : "30px"}}>  <img src={image5} alt="Logo"   ></img> </button></a>
             <a href={"https://isuzufederal.pk/"}> <button style={{marginLeft : "30px"}}>  <img src={image6} alt="Logo"   ></img> </button></a>
             <a href={"https://www.proton.com.pk/"}>  <button style={{marginLeft : "30px"}}>  <img src={image7} alt="Logo"   ></img> </button></a>
             <a href={"https://www.suzukipakistan.com/"}> <button style={{marginLeft : "30px", marginTop: "20px"}}>  <img src={image8} alt="Logo"   ></img> </button></a>
             <a href={"https://www.toyota-indus.com/"}>  <button style={{marginLeft : "30px"}}>  <img src={image9} alt="Logo"   ></img> </button></a>
             <a href={"https://mgmotors.com.pk/"}>   <button style={{marginLeft : "30px"}}>  <img src={image10} alt="Logo"   ></img> </button></a>
             <a href={"https://unitedcars.com.pk/"}>  <button style={{marginLeft : "30px"}}>  <img src={image11} alt="Logo"   ></img> </button></a>
             <a href={"https://dfskpakistan.com/"}><button style={{marginLeft : "30px"}}>  <img src={image12} alt="Logo"   ></img> </button></a>
             <a href={"https://www.porschecentre.com.pk/"}> <button style={{marginLeft : "30px"}}>  <img src={image13} alt="Logo"   ></img> </button></a>
             <a href={"https://www.pakistan.mercedes-benz-mena.com/vans/en"}><button style={{marginLeft : "30px"}}>  <img src={image14} alt="Logo"   ></img> </button></a>
            

            {/* Cards of best selling cars */}
              <br/><br/>
            <h3 style={{marginLeft : "30px",fontFamily:"a"}} ><b> Pakistan best selling cars</b></h3> 
              

           <div style={{display:"inline-block"}}>
              <UserCard pic = {this.state.hatchback_pic} name ={this.state.hatchbackName} 
              description = {this.state.hatchbackDescription}/></div>
           
            <div style={{ marginTop: "7px",display:"inline-block"}}>
           <UserCard pic = {this.state.sedan_pic} name ={this.state.sedanName} 
              description = {this.state.sedanDescription}
             /></div>

           <div style={{marginTop: "7px",display:"inline-block"}}>
           <UserCard pic = {this.state.offroad_pic} name ={this.state.offroadName} 
              description = {this.state.offroadDescription} /></div>
         
         <div style={{marginTop: "7px",display:"inline-block" }}>
           <UserCard pic = {this.state.Minijeep_pic} name ={this.state.MinijeepName} 
              description = {this.state.MinijeepDescription} /></div>
                <br/><br/><br/><br/>  
             {/* Footer */}

             </div>
        );
    }
}
 
export default UserHome;