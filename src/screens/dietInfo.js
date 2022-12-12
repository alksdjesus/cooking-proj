import React, { Component, useState } from 'react';
import '../css/allpages.css';
import '../css/profile.css';

const Diet = (props) => {

  return (
    <div className='profile_container'>
      <form align="left">
        <div className='sub_title'>
          Dietary Restrictions
        </div>
        <input type="profile" placeholder="Diet"/> <br/>
        <input type="profile" placeholder="Diet #2"/> <br/>
        <input type="profile" placeholder="Diet #3"/> <br/>
        Ingredients:
        <select>
          <option value=""></option>
          <option value="rice">Rice</option>
          <option value="beef">Beef</option>
          <option value="cabbage">Cabbage</option>
          <option value="milk">Milk</option>
        </select>
        <br/>
        Diet:
        <select>
          <option value=""></option>
          <option value="vegetarian">Vegetarian</option>
          <option value="pescatarian">Pescatarian</option>
          <option value="vegan">Vegan</option>
          <option value="gluten-free">Gluten-Free</option>
          <option value="lactose-intol">Lactose-Intolerant</option>
        </select>
        <br/>
        <input type="submit" value="Save Changes" /> <br/>
      </form>
    </div>
  )
}

export default Diet;