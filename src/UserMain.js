import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Bikes from './Bikes';
import Footer from './Footer';
import Loginform from './Loginform';
import Navibar from './Navibar';
import Signupform from './Signupform';
import UserFooter from './UserFooter';
import UserHome from './UserHome';
import UserNewCar from './UserNewCar';
import UserUsedCars from './UserUsedCars';
import UserAutoParts from './UserAutoParts';


class UserMain extends Component {
    state = {  } 
    render() { 
        return (
            <div style={{backgroundColor:"skyblue"}}>
                {/* Naviagation Bar */}
                <Navibar/>
                <Routes>
                <Route path='/' exact element={<UserHome/>}></Route>
               <Route path='/newCars' element={<UserNewCar/>}></Route>
               <Route path='/bikes' element={<Bikes/>}></Route>
               <Route path='/Signupform' element={<Signupform/>}></Route>
               <Route path='/Loginform' element={<Loginform/>}></Route>
                <Route path='/autoParts' element={<UserAutoParts/>}></Route>
               <Route path='/usedCars' element={<UserUsedCars/>}></Route>
              
                </Routes>
                <UserFooter/>
            </div>
        );
    }
}
 
export default UserMain;