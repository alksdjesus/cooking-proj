import React, { useEffect, useState } from 'react';
import MealList from '../components/itemlist';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../css/allpages.css';
import '../css/item.css';
import '../css/feed.css';
import { getUser } from '../service/AuthService';

const Feed = () => {

  const [mealData, setMealData] = useState(null);

  const user = getUser();
  const username = user !== 'undefined' && user ? user.username : '';
  const [firstName, setFirstName] = useState('');
  const [message, setMessage] = useState(null);

  const [apiKey, setKey] = useState('&apiKey=83ea555fc57845f19c8819f915ba02ba')
  const [baseSearchURL, setBaseURL] = useState('https://api.spoonacular.com/recipes/random?number=1')
  var [someLink, setLink] = useState('test')

  function genRecipes() {
    axios({
      method: "GET",
      url:"http://127.0.0.1:5000/random/" + username,
    })
    .then((response) => {
      console.log(response)
      // getFeed()
      setTimeout(() => { getFeed(); }, 5000)
    }).catch((error) => {
      if (error.response) {
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)
        }
    })}

  useEffect(() => {
    // Run! Like go get some data from an API.
    genRecipes()
    setTimeout(() => { getFeed(); }, 5000);
    // getFeed()
    // getProfileInfo()
    // displayRecpies()
  }, []);

  // async function getProfileInfo(){
  //   var url = 'https://5v7ysjln6j.execute-api.us-east-1.amazonaws.com/beta/profileinfo?username='
  //   url = url + username

  //   axios.get(url).then(response => {
  //       setFirstName(response.data.firstName);
  //   }).catch(error => {
  //       if (error.response?.status === 401) {
  //           setMessage(error.response.data.message);
  //       } else {
  //           setMessage('sorry....the backend server is down!! please try again later');
  //       }
  //   })
  // }

  async function getFeed() {
    setMessage('Loading Feed');
    var url = 'https://5v7ysjln6j.execute-api.us-east-1.amazonaws.com/beta/profileinfo?username='
    url = url + username

    axios.get(url).then(response => {
      // console.log(response.data.saved);
      getRecipes(response.data.feed);
      // setMessage('Loading Feed');
    }).catch(error => {
      if (error.response.status === 401) {
        setMessage(error.response.data.message);
      } else {
        setMessage('sorry....the backend server is down!! please try again later');
      }
  })
  }

  async function getRecipes(list)  {
    console.log(list)
    list = [...new Set(list)];
    var idquery = ""
    if (list.length == 0) {
      setMessage('Edit your preferences for more reccomendations!')
      return;
    }

    // list.reverse();

    for (var i = 0; i < list.length; i++)
    { 
      if (list[i] == null) {continue;}
      idquery = idquery + list[i].toString() + ",";
    }

    idquery.slice(0, -1)
    
    const feed = "https://api.spoonacular.com/recipes/informationBulk?ids=" + idquery + apiKey

     try {
      const response = await fetch(feed)
      const json = await response.json()
      setMealData(json)
      setMessage('')
      // setTimeout(() => { getFeed(); }, 2500);
      // getFeed()
    } catch (error) {
      console.error(error)
    } finally {
      // setLoading(false)
    }
  }

  // async function getRecipes()  {
  //   setLink(someLink = (baseSearchURL + apiKey))
  //    try {
  //     const response = await fetch(someLink)
  //     const json = await response.json()
  //     setMealData(json)
  //     // alert(mealData)
  //   } catch (error) {
  //     console.error(error)
  //   } finally {
  //     // setLoading(false)
  //   }
  // }

  console.log(mealData);

  const currentHour = new Date().getHours();
  
  const [time] = 
    currentHour < 12 && currentHour >= 5 ? ["morning"] : 
    currentHour >= 12 && currentHour < 18 ? ["afternoon"] :
    ["evening"];

  // var target = firstName;

  // if (firstName.trim() === '') {
  //   target = "chef";
  // }
  
  return (
    <div className='container'>
      <div className='title'>
        Good {time}, chef
      </div>
      <br/><br/><br/><br/><br/>
      <div className='feed_title'>
        Recipes you might like:
      </div>
      <div >
        {mealData && <MealList mealData={mealData} sender={"feed"}/>}
        {message}
      </div>
    </div>
  );
};

export default Feed;