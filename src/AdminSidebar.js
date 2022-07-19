import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const AdminSidebar = (props) => {
    return (

        <div >
                
                <Link to="/" >  <button style={{
                backgroundColor: 'Transparent', borderColor: 'Transparent', width: 270, marginTop: 70,
            }}> <h3 style={{ color: "white", fontFamily: "a" }}><b>Create Product</b></h3></button></Link>

        <Link to="/view" > <button style={{
                backgroundColor: 'Transparent', borderColor: 'Transparent', width: 270, marginTop: 70,
            }}> <h3 style={{ color: "white", fontFamily: "a" }}><b>Read Product</b></h3></button>
              </Link>

              <Link to="/update" >
            <button style={{
                backgroundColor: 'Transparent', borderColor: 'Transparent', width: 270, marginTop: 70,
            }}> <h3 style={{ color: "white", fontFamily: "a" }}><b>Update Product</b></h3></button>
              </Link>

              <Link to="/delete" >
            <button style={{
                backgroundColor: 'Transparent', borderColor: 'Transparent', width: 270, marginTop: 70,
            }}> <h3 style={{ color: "white", fontFamily: "a" }}><b>Delete Product</b></h3></button>
               </Link>
        </div>
    );
}

export default AdminSidebar;