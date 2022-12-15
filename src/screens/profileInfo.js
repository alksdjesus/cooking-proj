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
    const [name, setName] = useState('');
    const [bio, setBio] = useState('');
    const [dietaryRestrictions, setDietaryRestrictions] = useState([]);
    const [allergicIngredients, setAllergicIngredients] = useState([]);
    const [favoriteCuisines, setFavoriteCuisines] = useState([]);
    const [receivedResponse, setReceivedResponse] = useState('');
    
    const [message, setMessage] = useState(null);

    useEffect(() => {
        // Run! Like go get some data from an API.
        getProfileInfo()
    }, []);

    

    async function getProfileInfo(){
        var url = 'https://5v7ysjln6j.execute-api.us-east-1.amazonaws.com/beta/profileinfo?username='
        url = url + username

        axios.get(url).then(response => {
            setName(response.data.name)
            setBio(response.data.bio)
            setDietaryRestrictions(response.data.dietaryRestrictions)
            setAllergicIngredients(response.data.allergicIngredients)
            setFavoriteCuisines(response.data.favoriteCuisines)      
            
            console.log(response.data.dietaryRestrictions)
            setMessage('Info Updated');
        }).catch(error => {
            if (error.response.status === 401) {
                setMessage(error.response.data.message);
            } else {
                setMessage('sorry....the backend server is down!! please try again later');
            }
        })
    }
    
        
    return (
        <div className='profile_container'>
            <div align='center' className='sub_title'> My Profile </div>
            <div align='center' className='sub_title'> General Information </div>
            <div className='saved_title'> Username: </div>
            <div className='saved_info'> {username} </div> 
            <br />
            <div className='saved_title'> Name: </div> 
            <div className='saved_info'> {name} </div> 
            <br />

            <div className='saved_title'> Bio: </div>
            <div className='saved_info'> {bio} </div> 
            <br />
            <br />
            <br />

            <div align='center' className='sub_title'> Dietary Preferences </div>
            <div className='saved_title'> Favorite Cuisines: </div> 
            <div className='saved_info'> {favoriteCuisines.map((favoriteCuisine) => <li>{favoriteCuisine}</li>) }</div>
            <br />

            <div className='saved_title'> Dietary Restrictions: </div> 
            <div className='saved_info'> {dietaryRestrictions.map((dietaryRestriction) => <li>{dietaryRestriction}</li>) } </div>
            <br />

            <div className='saved_title'> Allergic Ingredients: </div> 
            <div className='saved_info'> {allergicIngredients.map((allergicIngredient) => <li>{allergicIngredient}</li>) } </div>
            

            
        {/* <form onSubmit={submitHandler} align="left">
            <div className='sub_title'>
            Profile Information
            </div>
            <div className='saved_title'>
            Username: 
            </div>
            <div className='saved_info'>
            {username}
            </div>
            <br/>
            <input type="profile" placeholder="First Name"value={firstName} onChange={event => setFirstName(event.target.value)}/> <br/>
            <input type="profile" placeholder="Last Name"value={lastName} onChange={event => setLastName(event.target.value)}/> <br/>
            <input type="profile" placeholder="Email" value={email} onChange={event => setEmail(event.target.value)}/> <br/>
            <textarea type="bio" placeholder="Bio" value={bio} onChange={event => setBio(event.target.value)} /> <br/>
            <br/>
            <div className='option_title'>
            Dietary Restrictions:
            </div>
            {/* <Select options={dietOptions} isMulti isClearable name="diets" styles={optionStyles}/>
            <br/>
            <div className='option_title'>
            Favorite Cuisines:
            </div>
            <Select options={cuisineOptions} isMulti isClearable name="cuisines" styles={optionStyles} onChange/>
            <br/>
            <div className='option_title'>
            Ingredients:
            </div>
            <Select options={ingredientOptions} isMulti isClearable name="ingredients" styles={optionStyles} onChange/> */}
            {/* <br/>
            <SaveButton input type="submit">
            Save
            </SaveButton>
            <br/>
        </form> */}
        </div>
    )
}

//<input type="button" value="Logout" onClick={logoutHandler}/>

export default Info;