import React from 'react';
import './App.css';

import Profile from './Profile';
import Login from './Login';
import Home from './Home';
import Help from './Help';
import About from './About';
import Recommendation from './Recommendation';

import {Routes,  Route,Link,Navigate,useNavigate} from 'react-router-dom';
import { useState } from 'react';


export default function App() {
  const [authed,setAuthed] = useState(false); 
  const navigate=useNavigate();
  function CheckForAuth({ authed, children }) {
    
    return authed ?
          children :
          <Navigate to="/login" replace />
  }
  function logOut() {
    setAuthed(false);
    navigate('/');
  }
 
  return (
    <main>
  
      
      <nav>
        <ul class="main1">
          <li class="homelink"><Link to="/" style={{ color: '#FFF' }}>Home</Link></li>
          <li class ="profilelink"><Link to="/profile"style={{ color: '#FFF' }}>Profile</Link></li>
          <li class = "friendslink"><Link to="/help"style={{ color: '#FFF' }}>Help</Link></li>
          <li class = "recommendationlink"><Link to="/recommendation"style={{ color: '#FFF' }}>Recommendation</Link></li>
          <li class="login-link"><Link to="/login"style={{ color: '#FFF' }}>{authed ? <span class="login-link" onClick={logOut}>Logout</span> : <Link class="login-link" to='/login'style={{ color: '#FFF' }}>Login</Link>}</Link></li>
          <li class = "aboutuslink"><Link to="/about"style={{ color: '#FFF' }}>About us</Link></li>
        </ul>
        </nav>
  

        <Routes>
         
      <Route exact path="/" element={<CheckForAuth authed={authed}><Home/></CheckForAuth>}/>
      <Route path="/login" element={
      <Login authed={authed} setAuthed={setAuthed}/> }/> 
      <Route path="/recommendation" element={<CheckForAuth authed={authed}><Recommendation/></CheckForAuth>}/>
      <Route path="/help" element={<CheckForAuth authed={authed}><Help/></CheckForAuth> }>
            
        </Route>
        <Route path="/about" element={<CheckForAuth authed={authed}><About/></CheckForAuth>}/>
      <Route path="/profile" element={<CheckForAuth authed={authed}>
        <Profile/> </CheckForAuth>
      }/>
      <Route path="/*" element={
        <Home/>}></Route>
     
      </Routes>
      
      
    
    </main>
  );
}





