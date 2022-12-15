import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Feed from "./screens/feed";
import Search from "./screens/search";
import General from "./screens/general";
import Profile from "./screens/profile";
import Saved from "./screens/saved";
import Recipe from "./screens/recipe";
import Create from "./screens/create";
import Diet from "./screens/diet";
import Register from "./screens/register";
import Information from "./screens/information";
import Navbar from './components/navbar';
import Login from "./screens/login";
import PublicRoutes from "./routes/PublicRoutes";
import PrivateRoutes from "./routes/PrivateRoutes";
import React, { useState, useEffect } from "react";
import { getUser, getToken, setUserSession, resetUserSession } from "./service/AuthService";
import axios from "axios";
import Layout from './components/layout.js';
import { Nav } from './components/navbarElements';
//import Loading from './components/loading.js';

const verifyTokenAPIURL = 'https://gzcxszjnze.execute-api.us-east-1.amazonaws.com/prod/verify';

function App() {

  const [isAuthenicating, setAuthenicating] = useState(true);

  useEffect(() => {
    const token = getToken();
    if (token === 'undefined' || token === undefined || token === null || !token) {
      return;
    }

    const requestBody = {
      user: getUser(),
      token: token
    }

    axios.post(verifyTokenAPIURL, requestBody).then(response => {
      setUserSession(response.data.user, response.data.token);
      setAuthenicating(false);
    }).catch(() => {
      resetUserSession();
      setAuthenicating(false);
    })
  }, []);

  const token = getToken();
  if (isAuthenicating && token) {
    return <div className="content">Authenicating...</div>
  }

  return (
   
    <Router> 
      <Navbar />
      <Routes>
        <Route element={<PublicRoutes />}>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/information' element={<Information/>}/>
        </Route>
        <Route element={<PrivateRoutes />}>
          <Route path='/' element={<Feed/>}/>
          <Route path='/feed' element={<Feed/>}/>
          <Route path='/search' element={<Search/>}/>
          <Route path='/general' element={<General/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/saved' element={<Saved/>}/>
          <Route path='/general' element={<General/>}/>
          <Route path='/recipe' element={<Recipe/>}/>
          <Route path='/create' element={<Create/>}/>
          <Route path='/diet' element={<Diet/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

/* <Route path='/general' element={<General/>}/>



*/
export default App;