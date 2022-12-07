import './App.css';
import { BrowserRouter as Router, NavLink, Route, Switch } from "react-router-dom";
import Feed from "./screens/feed";
import Search from "./screens/search";
import Profile from "./screens/profile";
import Saved from "./screens/saved";
import Settings from "./screens/settings";
import Recipe from "./screens/recipe";
import Create from "./screens/create";
import Register from "./screens/register";
import Navbar from './components/navbar';
import Login from "./screens/login";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
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
      <Router>
        <Switch>
          <Route exact path="/" component={ Login }/>
          <PublicRoute path="/login" component={ Login }/>
          <div>
            <Navbar />
            <Route exact path="/" component={ Login }/>
            <PublicRoute path="/register" component={ Register }/>
            <PublicRoute path="/login" component={ Login }/>
            <PrivateRoute path="/feed" component={ Feed }/>
            <PrivateRoute path="/search" component={ Search }/>
            <PrivateRoute path="/profile" component={ Profile }/>
            <PrivateRoute path="/saved" component={ Saved }/>
            <PrivateRoute path="/settings" component={ Settings }/>
            <PrivateRoute path="/recipe" component={ Recipe }/>
            <PrivateRoute path="/create" component={ Create }/>
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;