import React, { Component, useState } from 'react';
import AdminFooter from './AdminFooter';
import AdminNav from './AdminNav';
import AdminSidebar from './AdminSidebar';
import { Form } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
// import {addinfo} from './Service/api'
import {addinfo, productData} from './Service/api'

const AdminHome = () => {
    
    const [Productdata,setProductData]= useState(
      {
        ProductName:"",
        ProductBarcode:"",
        ProductOwner:"",
        ProductPrice:"",
        ProductDescription:""
      }
    )

    const {ProductName,ProductBarcode,ProductOwner,ProductPrice,ProductDescription}= Productdata ;

    const handleChange=(e)=>{
      setProductData({...Productdata,[e.target.name]:[e.target.value]})
    }
   
    const addDetails=async (e)=>{
      e.preventDefault();
     await addinfo(Productdata)

    }
    return (  

    <div>
      <AdminNav createState={"Create Product"} />
          
     
      <div className='row' >
    {/* Side Bar */}
    <div className='col-sm-3 col-md-3' style={{ backgroundColor: " black", height: 510, }}>
        <AdminSidebar />
    </div>
      

      {/* Center */}
       
       <div className='col-sm-9 col-md-9' style={{backgroundColor:"skyblue"}}>
       <Form>
      <div className='row'>
       <Form.Group className="col-5" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" name='ProductName'
        onChange={(e)=>handleChange(e)}/>
        </Form.Group>

        <Form.Group className="col-5" controlId="formBasicEmail">
        <Form.Label>Barcode</Form.Label>
        <Form.Control type="text" placeholder="Enter Barcode" name='ProductBarcode'
        onChange={(e)=>handleChange(e)}/>
        </Form.Group>
 
        </div>
      
       <div className='row'>
      <Form.Group className="col-5" controlId="formBasicPassword">
        <Form.Label>Enter Owner name</Form.Label>
        <Form.Control type="text" placeholder="Owner" name='ProductOwner'
        onChange={(e)=>handleChange(e)}/>
      </Form.Group>
      
      <Form.Group className="col-5" controlId="formBasicPassword">
        <Form.Label>Enter Product Price</Form.Label>
        <Form.Control type="text" placeholder="Price" name='ProductPrice'
        onChange={(e)=>handleChange(e)}/>
      </Form.Group>
      </div>

      <div className='row'>
      <Form.Group className="col-10" controlId="formBasicPassword">
        <Form.Label>Enter Product Description</Form.Label>
        <Form.Control type="text" placeholder="Product Description" name='ProductDescription'
        onChange={(e)=>handleChange(e)}/>
      </Form.Group></div>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={(e)=> addDetails(e)}>
        Submit
      </Button>
    </Form>
      </div>
    </div>
    
    



    </div>
    );
}
 
export default AdminHome;