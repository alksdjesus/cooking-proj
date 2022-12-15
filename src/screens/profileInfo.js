import React, { Component, useState, useEffect } from 'react';
import '../css/allpages.css';
import '../css/profile.css';
import { getUser, getFirst, resetUserSession } from '../service/AuthService';
import axios from 'axios';
import { SaveButton } from '../components/navbarElements.js';
import Select from 'react-select';
import { StyleSheetManager } from 'styled-components';

const updateAPIURL = 'https://5v7ysjln6j.execute-api.us-east-1.amazonaws.com/beta/profileinfo';

const Info = (props) => {
    //getting loggind in user
    const user = getUser();
    const username = user !== 'undefined' && user ? user.username : '';
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [bio, setBio] = useState('');
    const [dietaryRestrictions, setDietaryRestrictions] = useState([]);
    const [favoriteIngredients, setFavoriteIngredients] = useState([]);
    const [favoriteCuisines, setFavoriteCuisines] = useState([]);
    const [message, setMessage] = useState(null);

    useEffect(() => {
        // Run! Like go get some data from an API.
        getProfileInfo()
    }, []);

    

    async function getProfileInfo(){
        var url = 'https://5v7ysjln6j.execute-api.us-east-1.amazonaws.com/beta/profileinfo?username='
        url = url + username

        axios.get(url).then(response => {
            setFirstName(response.data.firstName);
            setLastName(response.data.lastName);
            setBio(response.data.bio);
            setDietaryRestrictions(Object.keys(response.data.dietaryRestrictions));
            setFavoriteIngredients(Object.keys(response.data.favoriteIngredients));
            setFavoriteCuisines(Object.values(response.data.favoriteCuisines));
            setMessage('Info Updated');
        }).catch(error => {
            if (error.response?.status === 401) {
                setMessage(error.response.data.message);
            } else {
                setMessage('sorry....the backend server is down!! please try again later');
            }
        })
    }
    
        
    return (
        <div className='profile_container'>
          <div className='profile_title'> My Profile </div>
          <div className='sub_title'> General Information </div>
          <div className='info_container'>
            <div className='saved_title'> Username: </div>
            <div className='saved_info'> {username} </div> 
            <br/>
            <div className='saved_title'> First Name: </div> 
            <div className='saved_info'> {firstName} </div> 
            <br/>
            <div className='saved_title'> Last Name: </div> 
            <div className='saved_info'> {lastName} </div> 
            <br/>
          </div>
          <div className='saved_title'> Bio: </div>
          <div className='saved_bio'> {bio} </div> 
          
          <br/>
          <br/>
          <br/>
          <div className='sub_title'> Dietary Preferences </div>
          <div className='saved_title'> Dietary Restrictions: </div> 
          <br/>
          <div className='list_info'> {dietaryRestrictions?.map((dietaryRestriction) => <ul>{dietaryRestriction}</ul>) } </div>
          <br/>
          <div className='saved_title'> Favorite Cuisines: </div> 
          <br/>
          <div className='list_info'> {favoriteCuisines?.map((favoriteCuisine) => <ul>{favoriteCuisine}</ul>) }</div>
          <br/>
          <div className='saved_title'> Favorite Ingredients: </div>
          <br/>
          <div className='list_info'> {favoriteIngredients?.map((favoriteIngredient) => <ul>{favoriteIngredient}</ul>) } </div>
        </div>
    )
}

export default Info;