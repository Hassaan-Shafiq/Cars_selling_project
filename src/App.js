
import UserHome from './UserHome';

import {Route , Switch,BrowserRouter as Router ,Routes} from "react-router-dom"

import { Link } from "react-router-dom";
import Loginform from './Loginform';
import Signupform from './Signupform';
import Footer from './Footer';
import NewCars from './NewCars';
import AdminHome from './AdminHome';
import AdminNav from './AdminNav';
import AdminDeletePage from './AdminDeletePage';
import AdminReadPage from './AdminReadPage';
import AdminUpdatePage from './AdminUpdatePage';
import UserNewCar from './UserNewCar';
import UserMain from './UserMain';
import AdminMain from './AdminMain';
import TerminalPractice from './TerminalPractice';
import Appp from './Appp';
import Buyy from './Buyy';
import Matchh from './Matchh';
function App() {
  return (
    <div>

{/*       
   <AdminMain/> */}
<UserMain/>

               
       </div>
  );
}

export default App;
