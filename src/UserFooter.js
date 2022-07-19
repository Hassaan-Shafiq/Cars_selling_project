import React, { Component } from 'react';

import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const UserFooter = () => {
    return (

        <div>
<MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol sm="6">
            <h5 className="title" style={{fontFamily:"a"}}><b>Thanks for visiting</b></h5>
            <p  style={{fontFamily:"a"}}>
              We hope you had like our content and you had find your dream vechile.We had
              always tried our best to give best price vechiles to our customer. If you havent
              find your vechile yet just signup and check out our amazing cars and bikes with amazing prices  
            </p>
          </MDBCol>
          
          <MDBCol sm="6">
                 
          <button type="button" class="btn btn-primary" >About US</button>
          <button type="button" class="btn btn-primary" >Terms and Condition</button>
          <button type="button" class="btn btn-primary" >Contact US</button>
              
          </MDBCol>

        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} All Rights Reserved
        </MDBContainer>
      </div>
    </MDBFooter>
 
      </div>


      );
}
 
export default UserFooter;



