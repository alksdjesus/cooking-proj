import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Feed from "./screens/feed";
import Search from "./screens/search";
import Profile from "./screens/profile";
import Saved from "./screens/saved";
import Recipe from "./screens/recipe";
import Create from "./screens/create";
import Diet from "./screens/diet";
import Register from "./screens/register";
import Navbar from './components/navbar';
import Login from "./screens/login";
import PublicRoutes from "./routes/PublicRoutes";
import PrivateRoutes from "./routes/PrivateRoutes";
import React, { useState, useEffect } from "react";
import { getUser, getToken, setUserSession, resetUserSession } from "./service/AuthService";
import axios from "axios";

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

  /*const LoginContainer = () => (
    <div className="container">
      <Route exact path="/" render={() => <Redirect to="/login" />} />
      <Route path="/login" component={ Login } />
    </div>
  )

  const DefaultContainer = () => (
    <div>
      <Route exact path="/" render={() => <Redirect to="/login" />} />
      <Route path="/login" component={ Login } />
    </div>
  )*/

  return (
    <div className='App'>
      {/* <Router>
        <Routes>
          <Route exact path="/" component={ Login }/>
          <PublicRoute path="/login" component={ Login }/>
          <PublicRoute path="/register" component={ Register }/>
          <div>
            <Navbar />
            <PrivateRoute path="/feed" component={ Feed }/>
            <PrivateRoute path="/search" component={ Search }/>
            <PrivateRoute path="/profile" component={ Profile }/>
            <PrivateRoute path="/saved" component={ Saved }/>
            <PrivateRoute path="/recipe" component={ Recipe }/>
            <PrivateRoute path="/create" component={ Create }/>
            <PrivateRoute path="/diet" component={ Diet }/>
          </div>
        </Routes>
      </Router> */}
      <Router> 
        <Navbar />
        <Routes>
          <Route element= {<PrivateRoutes />}>
            <Route path='/' element={<Feed/>}/>
            <Route path='/feed' element={<Feed/>}/>
            <Route path='/search' element={<Search/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/saved' element={<Saved/>}/>
            <Route path='/recipe' element={<Recipe/>}/>
            <Route path='/create' element={<Create/>}/>
            <Route path='/diet' element={<Diet/>}/>
          </Route>
          <Route element= {<PublicRoutes />}>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
          </Route>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;