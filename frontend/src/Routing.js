import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './Components/LandingPage/Newlandingpage';
import SignUp from './Components/SignUp/NewSignup';
import Login from './Components/SignIn/NewSignin';
import App from './Components/UserDashboard/App';
import Main from './Components/PollCreation/Main';

import Education from './Components/PollDashboard/Education';
import SocialMedia from './Components/PollDashboard/SocialMedia';
 import Healthcare from './Components/PollDashboard/Healthcare';
 import Technology from './Components/PollDashboard/Technology';
 import Sports from './Components/PollDashboard/Sports';
 import Entertainment from './Components/PollDashboard/Entertainment';
 import Government from './Components/PollDashboard/Government';
import Dashboard from './Components/PollDashboard/Dashboard';
import Settings from './Components/PollDashboard/Lead';

import Howitworks from './Components/UserHeader/Howitworks';
import Explore from './Components/UserHeader/Explore';
import Premium from './Components/UserHeader/Premium';
import DisplayPolls from './Components/UserHeader/DisplayPolls';

const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route path="/Newsignup" element={<SignUp />} />
                <Route path="/" element={<Landing/>} />  
                <Route path="/Newsignin" element={<Login/>} />     
                <Route path="/userdashboard" element={<App/>} />     
                <Route path="/main" element={<Main/>} />  
                
                <Route path="/publicdashboard" element={<Dashboard />} /> 
                <Route path="/education" element={<Education />} />
              <Route path="/social" element={<SocialMedia />} />
              <Route path="/health" element={<Healthcare />} />
              <Route path="/technology" element={<Technology />} />
              <Route path="/sports" element={<Sports />} />
              <Route path="/entertainment" element={<Entertainment />} />
              <Route path="/government" element={<Government />} />
              <Route path="/Lead" element={<Settings/>}/>

              <Route path="Howitworks" element={<Howitworks/>}/>
              <Route path="Explore" element={<Explore/>}/>
              <Route path="Premium" element={<Premium/>}/>
              <Route path="DisplayPolls" element={<DisplayPolls/>}/>
            </Routes>
        </Router>
    );
};

export default Routing;