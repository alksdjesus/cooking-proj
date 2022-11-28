import './App.css';
import React, {Component} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Search from './screens/search';
import Feed from './screens/feed';
import Saved from './screens/saved';
import Profile from './screens/profile';
import Recipe from './screens/recipe';
import { fetchData, putData} from './components/awsfunctions'
import Navbar from './components/navbar';

class App extends Component { 
  render() { 
    return (
      <Router> 
        <Navbar />
        <Routes>
          <Route path='/' element={<Feed/>}/>
          <Route path='/feed' element={<Feed/>}/>
          <Route path='/search' element={<Search/>}/>
          <Route path='/saved' element={<Saved/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/recipe' element={<Recipe/>}/>
        </Routes>
      </Router>
    )
  }
}

export default App;
