import React, { Component } from 'react';
import { MDBCol, MDBIcon } from "mdbreact";
import { AiOutlineSearch } from 'react-icons/ai';

const SearchBar = () => {
  return (
<center>
    <MDBCol md="6">
     
      <div className="input-group md-form form-sm form-1 pl-0">
        <div className="input-group-prepend">
          <span className="input-group-text purple lighten-3" id="basic-text1">
           <AiOutlineSearch/>
           </span>
        </div>
        <input
          className="form-control my-0 py-1"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
      </div>
    </MDBCol> </center>
  );
};

export default SearchBar;
