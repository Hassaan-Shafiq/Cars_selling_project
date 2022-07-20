
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

function App() {
  return (
    <div>

<UserMain/>

{/* <AdminMain/>                */}
       </div>
  );
}

export default App;
