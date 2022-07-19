import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';

import Navibar from './Navibar';
import AdminHome from './AdminHome';
import AdminReadPage from './AdminReadPage';
import AdminUpdatePage from './AdminUpdatePage';
import AdminDeletePage from './AdminDeletePage';


class AdminMain extends Component {
    state = {  } 
    render() { 
        return (
            <div style={{backgroundColor:"skyblue"}}>

                {/* Naviagation Bar */}
                  
                 <Routes>
                <Route path='/' exact element={<AdminHome/>}></Route>
               <Route path='/view' element={<AdminReadPage/>}></Route>
               <Route path='/update' element={<AdminUpdatePage/>}></Route>
               <Route path='/delete' element={<AdminDeletePage/>}></Route>
                </Routes>
            </div>
        );
    }
}
 
export default AdminMain;