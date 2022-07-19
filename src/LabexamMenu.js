import { Button } from 'bootstrap/dist/js/bootstrap.bundle';
import React, { Component } from 'react';

import { AiOutlineShoppingCart } from 'react-icons/ai';
import image1 from './images/img1.jpg';
import image2 from './images/img2.jpg';
import image3 from './images/img3.jpg';
import image4 from './images/img4.jpg';
import image5 from './images/main_img3.jpg';


class LabexamMenu extends Component {
    state = {}
    render() {
        return (
            <div className='bg_image' 
            style={{
                backgroundImage: 'url('+ image5+')',
          backgroundSize: "cover",
          height: "100vh",
          color: "#f5f5f5"
            }}>          
                 <div className='container ' style={{ backgroundColor:"white" }}>
                <div className='row'>
                    <div className='col-sm-12 col-md-12' style={{ marginTop: "20px",borderRadius:"25px" }}>
                        <center>
                            <h2 style={{color:"black"}}><b>What will you eat today</b></h2></center>
                        <center> <h3 style={{color:"black"}}>We have very tasty food and we hope so you will like it
                            We have alot of burgers,pizzas,samosa,and so much more food
                        </h3></center>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-sm-9 col-md-9' style={{ marginTop: "20px" }}>
                      
                    <button type="button" class="btn  btn-outline-success"
                            style={{ borderRadius: "25px" }} ><text style={{color:"black"}}>Button</text></button>

                        <button type="button" class="btn  btn-outline-success"
                            style={{ borderRadius: "25px", }} ><text style={{color:"black"}}>Button</text></button>
                        <button type="button" class="btn  btn-outline-success "
                            style={{ borderRadius: "25px" }} ><text style={{color:"black"}}>Button</text></button>
                        <button type="button" class="btn  btn-outline-success"
                            style={{ borderRadius: "25px" }} ><text style={{color:"black"}}>Button</text></button>
                    </div>
                </div>







                <div className='row'>
                    <div className='col-sm-12 col-md-12' style={{ marginTop: "20px" }}>

                       <button style={{border:"transparent"}}><img src={image1} alt="Logo" style={{ height: 200, width: 200, borderRadius: "25px" }} 
                     ></img></button> 
                        <button style={{border:"transparent"}}><img src={image2} alt="Logo" style={{ height: 200, width: 200, borderRadius: "25px", marginLeft: '10px'
                       }} 
                        ></img></button> 
                       <button style={{border:"transparent"}}><img src={image3} alt="Logo" style={{ height: 200, width: 200, borderRadius: "25px", marginLeft: '10px' }} ></img></button> 
                       <button style={{border:"transparent"}}><img src={image4} alt="Logo" style={{ height: 200, width: 200, borderRadius: "25px", marginLeft: '10px' }}  ></img></button> 

                    </div>
                </div>


                <div className='row'>
                    <div className='col-sm-3 col-md-3' style={{ marginTop: "20px" }}>
                    <text style={{color:"black"}}>Chicken Chaomi Rs 50</text>    <AiOutlineShoppingCart />

                    </div>

                    <div className='col-sm-2 col-md-2' style={{ marginTop: "20px" }}>
                    <text style={{color:"black"}}>Pasta Rs 100 </text>   <AiOutlineShoppingCart /> </div>

                        <div className='col-sm-2 col-md-2' style={{ marginTop: "20px" }}>
                        <text style={{color:"black"}}>Pizza Rs 400 </text>   <AiOutlineShoppingCart /> </div>

                            <div className='col-sm-3 col-md-3' style={{ marginTop: "20px" }}>
                            <text style={{color:"black"}}> Burger Rs 200</text>    <AiOutlineShoppingCart /> </div>
                            </div>



                        </div>

                             
                        </div>
 
                       
                       
                        

                    );
    }
}

                    export default LabexamMenu;