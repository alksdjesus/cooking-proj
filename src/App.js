import './App.css';
import React, {Component} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './screens/home';
import Search from './screens/search';
import Feed from './screens/feed';
import Profile from './screens/profile';

class App extends Component { 

  render() { 

  //  const HomeComponent = () => (<Home/>);

    return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}>
      </Route>
      <Route path='/search' element={<Search/>}>
      </Route>
      <Route path='/feed' element={<Feed/>}>
      </Route>
      <Route path='/profile' element={<Profile/>}>
      </Route>
    </Routes>
    </BrowserRouter>
    </div>
    )

  }
}

export default App;
