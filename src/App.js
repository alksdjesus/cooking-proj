import './App.css';
import React, {Component} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './screens/home';
import Search from './screens/search';
import Feed from './screens/feed';
import Profile from './screens/profile';
import Recipe from './screens/recipe';

class App extends Component { 

  render() { 
    return (
      <div> 
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/search' element={<Search/>}/>
              <Route path='/feed' element={<Feed/>}/>
              <Route path='/profile' element={<Profile/>}/>
              <Route path='/recipe' element={<Recipe/>}/>
            </Routes>
          </BrowserRouter>
      </div>
    )
  }
}

export default App;
