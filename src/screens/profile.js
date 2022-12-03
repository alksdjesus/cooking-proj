import React, {Component} from 'react';
import { getUser, resetUserSession } from '../service/AuthService';


const Profile = (props) => {
  const logoutHandler = () => {
    resetUserSession();
    props.history.push('/login');
  }

  return (
    <div>
      <h1>Edit Profile</h1>
      <h5>Name:</h5>
      <input type="text"/>
      <h5>Email:</h5>
      <input type="text"/>
      <h5>Username:</h5>
      <input type="text"/>
      <h5>Ingredients:</h5>
      <select>
        <option value=""></option>
        <option value="rice">Rice</option>
        <option value="beef">Beef</option>
        <option value="cabbage">Cabbage</option>
        <option value="milk">Milk</option>
      </select>
      <h5>Dietary Restrictions: dropdown menu</h5>
      <select>
        <option value=""></option>
        <option value="vegetarian">Vegetarian</option>
        <option value="pescatarian">Pescatarian</option>
        <option value="vegan">Vegan</option>
        <option value="gluten-free">Gluten-Free</option>
      </select>
      <h5>Recipes: list of recipes</h5>
      <input type="button" value="Logout" onClick={logoutHandler} />
    </div>
  )
}

export default Profile;