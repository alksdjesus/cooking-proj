import React, { Component, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/allpages.css';
import '../css/profile.css';
import { getUser, resetUserSession } from '../service/AuthService';
import axios from 'axios';
import { SaveButton } from '../components/navbarElements.js';
import Select from 'react-select';
import { StyleSheetManager } from 'styled-components';

const updateAPIURL = 'https://5v7ysjln6j.execute-api.us-east-1.amazonaws.com/beta/profileinfo';

const Info = (props) => {
  const navigate = useNavigate();
  var dietaryRestrictions = new Array();
  var ingredients = new Array();
  var cuisines = new Array();


  //getting loggind in user
  const user = getUser();
  const username = user !== 'undefined' && user ? user.username : '';


  // const [name, setName] = useState('');
  const [firstName, setFistName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  //const [ingredients, setIngredients] = useState('');
  //const [dietaryRestrictions, setDietaryRestrictions] = useState('');
  const [rated, setRated] = useState('');
  const [saved, setSaved] = useState('');
  const [message, setMessage] = useState(null);

  const logoutHandler = () => {
    resetUserSession();
    navigate('/login');
  }

  const submitHandler = (event) => {
    event.preventDefault();
    
    setMessage(null);
    
    // const requestBody = {
    //   username: username,
    //   updateKey: "name",
    //   updateValue: name
    // }
    // axios.patch(updateAPIURL, requestBody).then(response => {
    //   setMessage('Info Updated');
    // }).catch(error => {
    //   if (error.response.status === 401) {
    //     setMessage(error.response.data.message);
    //   } else {
    //     setMessage('sorry....the backend server is down!! please try again later');
    //   }
    // })

    // if (name !== '') {
    //   submitName();
    // }

    if (firstName !== '') {
      submitFirstName();
    }
    if (lastName !== '') {
      submitLastName();
    }
    if (bio !== '') {
      submitBio();
    }
    if (email !== '') {
      submitEmail();
    }
    submitIngredients();
    submitDietaryRestrictions();
    submitRated();
    submitSaved();

    // if (ingredients !== '') {
    //   submitIngredients();
    // }
    // if (dietaryRestrictions !== '') {
    //   submitDietaryRestrictions();
    // }
    // if (rated !== '') {
    //   submitRated();
    // }
    // if (saved !== '') {
    //   submitSaved();
    // }
  }

//   const submitName = () => {
//     const requestBody = {
//       username: username,
//       updateKey: "name",
//       updateValue: name
//     }

//     axios.patch(updateAPIURL, requestBody).then(response => {
//       setMessage('Info Updated');
//     }).catch(error => {
//       if (error.response.status === 401) {
//         setMessage(error.response.data.message);
//       } else {
//         setMessage('sorry....the backend server is down!! please try again later');
//       }
//   })
// }

  const submitFirstName = () => {
    const requestBody = {
      username: username,
      updateKey: "firstName",
      updateValue: firstName
    }

    axios.patch(updateAPIURL, requestBody).then(response => {
      setMessage('Info Updated');
    }).catch(error => {
      if (error.response.status === 401) {
        setMessage(error.response.data.message);
      } else {
        setMessage('sorry....the backend server is down!! please try again later');
      }
    })
  }

  const submitLastName = () => {
    const requestBody = {
      username: username,
      updateKey: "lastName",
      updateValue: lastName
    }

    axios.patch(updateAPIURL, requestBody).then(response => {
      setMessage('Info Updated');
    }).catch(error => {
      if (error.response.status === 401) {
        setMessage(error.response.data.message);
      } else {
        setMessage('sorry....the backend server is down!! please try again later');
      }
    })
  }

  const submitBio = () => {
    const requestBody = {
      username: username,
      updateKey: "bio",
      updateValue: bio
    }

    axios.patch(updateAPIURL, requestBody).then(response => {
      setMessage('Info Updated');
    }).catch(error => {
      if (error.response.status === 401) {
        setMessage(error.response.data.message);
      } else {
        setMessage('sorry....the backend server is down!! please try again later');
      }
    })
  }

  const submitEmail = () => {
    const requestBody = {
      username: username,
      updateKey: "email",
      updateValue: email
    }

    axios.patch(updateAPIURL, requestBody).then(response => {
      setMessage('Info Updated');
    }).catch(error => {
      if (error.response.status === 401) {
        setMessage(error.response.data.message);
      } else {
        setMessage('sorry....the backend server is down!! please try again later');
      }
    })
  }
  const submitIngredients = () => {
    const requestBody = {
      username: username,
      updateKey: "ingredients",
      updateValue: []
    }

    axios.patch(updateAPIURL, requestBody).then(response => {
      setMessage('Info Updated');
    }).catch(error => {
      if (error.response.status === 401) {
        setMessage(error.response.data.message);
      } else {
        setMessage('sorry....the backend server is down!! please try again later');
      }
    })
  }

  const submitDietaryRestrictions = () => {
    const requestBody = {
      username: username,
      updateKey: "dietaryRestrictions",
      updateValue: []
    }

    axios.patch(updateAPIURL, requestBody).then(response => {
      setMessage('Info Updated');
    }).catch(error => {
      if (error.response.status === 401) {
        setMessage(error.response.data.message);
      } else {
        setMessage('sorry....the backend server is down!! please try again later');
      }
    })
  }
  const submitRated = () => {
    const requestBody = {
      username: username,
      updateKey: "rated",
      updateValue: {}
    }

    axios.patch(updateAPIURL, requestBody).then(response => {
      setMessage('Info Updated');
    }).catch(error => {
      if (error.response.status === 401) {
        setMessage(error.response.data.message);
      } else {
        setMessage('sorry....the backend server is down!! please try again later');
      }
    })
  }
  const submitSaved = () => {
    const requestBody = {
      username: username,
      updateKey: "saved",
      updateValue: []
    }

    axios.patch(updateAPIURL, requestBody).then(response => {
      setMessage('Info Updated');
    }).catch(error => {
      if (error.response.status === 401) {
        setMessage(error.response.data.message);
      } else {
        setMessage('sorry....the backend server is down!! please try again later');
      }
    })
  }

  const dietOptions = [
    { value: 'dairy', label: 'Lactose Intolerance' },
    { value: 'egg', label: 'Egg-Free' },
    { value: 'fish', label: 'Fish Allergy' },
    { value: 'shellfish', label: 'Shellfish Allergy' },
    { value: 'treenut', label: 'Treenut Allergy' },
    { value: 'peanut', label: 'Peanut Allergy' },
    { value: 'wheat', label: 'Gluten-Free' },
    { value: 'soy', label: 'Soy-Free' },
  ]

  const ingredientOptions = [
{ value: "5 spice powder", label: "5 Spice Powder" },
{ value: "acorn squash", label: "Acorn Squash" },
{ value: "adobo sauce", label: "Adobo Sauce" },
{ value: "agave nectar", label: "Agave Nectar" },
{ value: "ahi tuna", label: "Ahi Tuna" },
{ value: "alfredo pasta sauce", label: "Alfredo Pasta Sauce" },
{ value: "almond extract", label: "Almond Extract" },
{ value: "almond flour", label: "Almond Flour" },
{ value: "almond milk", label: "Almond Milk" },
{ value: "almonds", label: "Almonds" },
{ value: "amaretto", label: "Amaretto" },
{ value: "ancho chiles", label: "Ancho Chiles" },
{ value: "anchovies", label: "Anchovies" },
{ value: "andouille sausage", label: "Andouille Sausage" },
{ value: "angel food cake mix", label: "Angel Food Cake Mix" },
{ value: "angel hair pasta", label: "Angel Hair Pasta" },
{ value: "angostura bitters", label: "Angostura Bitters" },
{ value: "apple", label: "Apple" },
{ value: "apple butter spread", label: "Apple Butter Spread" },
{ value: "apple cider", label: "Apple Cider" },
{ value: "apple juice", label: "Apple Juice" },
{ value: "apple pie spice", label: "Apple Pie Spice" },
{ value: "apricot preserves", label: "Apricot Preserves" },
{ value: "apricots", label: "Apricots" },
{ value: "arborio rice", label: "Arborio Rice" },
{ value: "arrowroot powder", label: "Arrowroot Powder" },
{ value: "artichoke heart quarters", label: "Artichoke Heart Quarters" },
{ value: "artichokes", label: "Artichokes" },
{ value: "arugula", label: "Arugula" },
{ value: "asafoetida", label: "Asafoetida" },
{ value: "asafoetida powder", label: "Asafoetida Powder" },
{ value: "asiago cheese", label: "Asiago Cheese" },
{ value: "asian pear", label: "Asian Pear" },
{ value: "asparagus spears", label: "Asparagus Spears" },
{ value: "avocado", label: "Avocado" },
{ value: "avocado oil", label: "Avocado Oil" },
{ value: "baby bell peppers", label: "Baby Bell Peppers" },
{ value: "baby bok choy", label: "Baby Bok Choy" },
{ value: "baby carrots", label: "Baby Carrots" },
{ value: "baby corn", label: "Baby Corn" },
{ value: "baby spinach leaves", label: "Baby Spinach Leaves" },
{ value: "baby-back ribs", label: "Baby-Back Ribs" },
{ value: "baby-back ribs", label: "Baby-Back Ribs" },
{ value: "bacon", label: "Bacon" },
{ value: "bacon fat", label: "Bacon Fat" },
{ value: "baguette", label: "Baguette" },
{ value: "baking bar", label: "Baking Bar" },
{ value: "baking powder", label: "Baking Powder" },
{ value: "baking soda", label: "Baking Soda" },
{ value: "balsamic glaze", label: "Balsamic Glaze" },
{ value: "balsamic vinegar", label: "Balsamic Vinegar" },
{ value: "bamboo shoots", label: "Bamboo Shoots" },
{ value: "banana", label: "Banana" },
{ value: "basmati rice", label: "Basmati Rice" },
{ value: "bay leaves", label: "Bay Leaves" },
{ value: "bbq sauce", label: "Bbq Sauce" },
{ value: "beans", label: "Beans" },
{ value: "beef", label: "Beef" },
{ value: "beef brisket", label: "Beef Brisket" },
{ value: "beef broth", label: "Beef Broth" },
{ value: "beef chuck roast", label: "Beef Chuck Roast" },
{ value: "beef stock", label: "Beef Stock" },
{ value: "beef tenderloin", label: "Beef Tenderloin" },
{ value: "beer", label: "Beer" },
{ value: "beer", label: "Beer" },
{ value: "beets", label: "Beets" },
{ value: "bell pepper", label: "Bell Pepper" },
{ value: "berries", label: "Berries" },
{ value: "biscuit mix", label: "Biscuit Mix" },
{ value: "biscuits", label: "Biscuits" },
{ value: "bittersweet chocolate", label: "Bittersweet Chocolate" },
{ value: "black bean sauce", label: "Black Bean Sauce" },
{ value: "black beans", label: "Black Beans" },
{ value: "black olives", label: "Black Olives" },
{ value: "black pepper", label: "Black Pepper" },
{ value: "black sesame seeds", label: "Black Sesame Seeds" },
{ value: "blackberries", label: "Blackberries" },
{ value: "blanched almonds", label: "Blanched Almonds" },
{ value: "blood orange", label: "Blood Orange" },
{ value: "blue cheese", label: "Blue Cheese" },
{ value: "blueberries", label: "Blueberries" },
{ value: "bok choy", label: "Bok Choy" },
{ value: "boneless skinless chicken breast", label: "Boneless Skinless Chicken Breast" },
{ value: "bourbon", label: "Bourbon" },
{ value: "brandy", label: "Brandy" },
{ value: "bread", label: "Bread" },
{ value: "bread flour", label: "Bread Flour" },
{ value: "breakfast links", label: "Breakfast Links" },
{ value: "brie", label: "Brie" },
{ value: "broccoli", label: "Broccoli" },
{ value: "broccoli florets", label: "Broccoli Florets" },
{ value: "brown rice", label: "Brown Rice" },
{ value: "brown rice flour", label: "Brown Rice Flour" },
{ value: "brown sugar", label: "Brown Sugar" },
{ value: "brownie mix", label: "Brownie Mix" },
{ value: "brussel sprouts", label: "Brussel Sprouts" },
{ value: "bulgur", label: "Bulgur" },
{ value: "butter", label: "Butter" },
{ value: "butterhead lettuce", label: "Butterhead Lettuce" },
{ value: "buttermilk", label: "Buttermilk" },
{ value: "butternut squash", label: "Butternut Squash" },
{ value: "butterscotch chips", label: "Butterscotch Chips" },
{ value: "cabbage", label: "Cabbage" },
{ value: "caesar dressing", label: "Caesar Dressing" },
{ value: "cajun seasoning", label: "Cajun Seasoning" },
{ value: "cake flour", label: "Cake Flour" },
{ value: "candy canes", label: "Candy Canes" },
{ value: "candy coating", label: "Candy Coating" },
{ value: "candy melts", label: "Candy Melts" },
{ value: "canned black beans", label: "Canned Black Beans" },
{ value: "canned diced tomatoes", label: "Canned Diced Tomatoes" },
{ value: "canned garbanzo beans", label: "Canned Garbanzo Beans" },
{ value: "canned green chiles", label: "Canned Green Chiles" },
{ value: "canned kidney beans", label: "Canned Kidney Beans" },
{ value: "canned mushrooms", label: "Canned Mushrooms" },
{ value: "canned pinto beans", label: "Canned Pinto Beans" },
{ value: "canned red kidney beans", label: "Canned Red Kidney Beans" },
{ value: "canned tomatoes", label: "Canned Tomatoes" },
{ value: "canned tuna", label: "Canned Tuna" },
{ value: "canned white beans", label: "Canned White Beans" },
{ value: "canned white cannellini beans", label: "Canned White Cannellini Beans" },
{ value: "cannellini beans", label: "Cannellini Beans" },
{ value: "cantaloupe", label: "Cantaloupe" },
{ value: "capers", label: "Capers" },
{ value: "caramel sauce", label: "Caramel Sauce" },
{ value: "caramels", label: "Caramels" },
{ value: "caraway seed", label: "Caraway Seed" },
{ value: "cardamom", label: "Cardamom" },
{ value: "cardamom pods", label: "Cardamom Pods" },
{ value: "carp", label: "Carp" },
{ value: "carrots", label: "Carrots" },
{ value: "cat fish filets", label: "Cat Fish Filets" },
{ value: "cauliflower", label: "Cauliflower" },
{ value: "cauliflower florets", label: "Cauliflower Florets" },
{ value: "cauliflower rice", label: "Cauliflower Rice" },
{ value: "celery", label: "Celery" },
{ value: "celery ribs", label: "Celery Ribs" },
{ value: "celery root", label: "Celery Root" },
{ value: "celery salt", label: "Celery Salt" },
{ value: "celery seed", label: "Celery Seed" },
{ value: "cereal", label: "Cereal" },
{ value: "champagne", label: "Champagne" },
{ value: "chana dal", label: "Chana Dal" },
{ value: "cheddar", label: "Cheddar" },
{ value: "cheese", label: "Cheese" },
{ value: "cheese curds", label: "Cheese Curds" },
{ value: "cheese dip", label: "Cheese Dip" },
{ value: "cheese soup", label: "Cheese Soup" },
{ value: "cheese tortellini", label: "Cheese Tortellini" },
{ value: "cherry", label: "Cherry" },
{ value: "cherry pie filling", label: "Cherry Pie Filling" },
{ value: "cherry tomatoes", label: "Cherry Tomatoes" },
{ value: "chestnuts", label: "Chestnuts" },
{ value: "chia seeds", label: "Chia Seeds" },
{ value: "chicken base", label: "Chicken Base" },
{ value: "chicken bouillon", label: "Chicken Bouillon" },
{ value: "chicken bouillon granules", label: "Chicken Bouillon Granules" },
{ value: "chicken breasts", label: "Chicken Breasts" },
{ value: "chicken broth", label: "Chicken Broth" },
{ value: "chicken drumsticks", label: "Chicken Drumsticks" },
{ value: "chicken legs", label: "Chicken Legs" },
{ value: "chicken pieces", label: "Chicken Pieces" },
{ value: "chicken sausage", label: "Chicken Sausage" },
{ value: "chicken stock", label: "Chicken Stock" },
{ value: "chicken tenders", label: "Chicken Tenders" },
{ value: "chicken thighs", label: "Chicken Thighs" },
{ value: "chicken wings", label: "Chicken Wings" },
{ value: "chickpea", label: "Chickpea" },
{ value: "chile garlic sauce", label: "Chile Garlic Sauce" },
{ value: "chili paste", label: "Chili Paste" },
{ value: "chili peppers", label: "Chili Peppers" },
{ value: "chili powder", label: "Chili Powder" },
{ value: "chili sauce", label: "Chili Sauce" },
{ value: "chipotle chiles in adobo", label: "Chipotle Chiles In Adobo" },
{ value: "chipotle chilies", label: "Chipotle Chilies" },
{ value: "chipotle peppers in adobo", label: "Chipotle Peppers In Adobo" },
{ value: "chive & onion cream cheese spread", label: "Chive & Onion Cream Cheese Spread" },
{ value: "chocolate", label: "Chocolate" },
{ value: "chocolate chip cookies", label: "Chocolate Chip Cookies" },
{ value: "chocolate chunks", label: "Chocolate Chunks" },
{ value: "chocolate ice cream", label: "Chocolate Ice Cream" },
{ value: "chocolate milk", label: "Chocolate Milk" },
{ value: "chocolate sandwich cookies", label: "Chocolate Sandwich Cookies" },
{ value: "chocolate syrup", label: "Chocolate Syrup" },
{ value: "chocolate wafer cookies", label: "Chocolate Wafer Cookies" },
{ value: "chorizo sausage", label: "Chorizo Sausage" },
{ value: "cider vinegar", label: "Cider Vinegar" },
{ value: "cilantro", label: "Cilantro" },
{ value: "cinnamon roll", label: "Cinnamon Roll" },
{ value: "cinnamon stick", label: "Cinnamon Stick" },
{ value: "cinnamon sugar", label: "Cinnamon Sugar" },
{ value: "cinnamon swirl bread", label: "Cinnamon Swirl Bread" },
{ value: "clam juice", label: "Clam Juice" },
{ value: "clams", label: "Clams" },
{ value: "clarified butter", label: "Clarified Butter" },
{ value: "clove", label: "Clove" },
{ value: "coarse salt", label: "Coarse Salt" },
{ value: "coarsely ground pepper", label: "Coarsely Ground Pepper" },
{ value: "cocoa nibs", label: "Cocoa Nibs" },
{ value: "cocoa powder", label: "Cocoa Powder" },
{ value: "coconut", label: "Coconut" },
{ value: "coconut aminos", label: "Coconut Aminos" },
{ value: "coconut butter", label: "Coconut Butter" },
{ value: "coconut cream", label: "Coconut Cream" },
{ value: "coconut extract", label: "Coconut Extract" },
{ value: "coconut flour", label: "Coconut Flour" },
{ value: "coconut milk", label: "Coconut Milk" },
{ value: "coconut oil", label: "Coconut Oil" },
{ value: "coconut water", label: "Coconut Water" },
{ value: "cod", label: "Cod" },
{ value: "coffee", label: "Coffee" },
{ value: "cognac", label: "Cognac" },
{ value: "cola", label: "Cola" },
{ value: "colby jack", label: "Colby Jack" },
{ value: "collard greens", label: "Collard Greens" },
{ value: "condensed cream of celery soup", label: "Condensed Cream Of Celery Soup" },
{ value: "condensed cream of mushroom soup", label: "Condensed Cream Of Mushroom Soup" },
{ value: "confectioner's swerve", label: "Confectioner'S Swerve" },
{ value: "cooked bacon", label: "Cooked Bacon" },
{ value: "cooked brown rice", label: "Cooked Brown Rice" },
{ value: "cooked chicken breast", label: "Cooked Chicken Breast" },
{ value: "cooked ham", label: "Cooked Ham" },
{ value: "cooked long grain rice", label: "Cooked Long Grain Rice" },
{ value: "cooked pasta", label: "Cooked Pasta" },
{ value: "cooked polenta", label: "Cooked Polenta" },
{ value: "cooked quinoa", label: "Cooked Quinoa" },
{ value: "cooked wild rice", label: "Cooked Wild Rice" },
{ value: "cookies", label: "Cookies" },
{ value: "coriander", label: "Coriander" },
{ value: "corn", label: "Corn" },
{ value: "corn bread mix", label: "Corn Bread Mix" },
{ value: "corn chips", label: "Corn Chips" },
{ value: "corn flakes cereal", label: "Corn Flakes Cereal" },
{ value: "corn flour", label: "Corn Flour" },
{ value: "corn kernels", label: "Corn Kernels" },
{ value: "corn oil", label: "Corn Oil" },
{ value: "corn tortillas", label: "Corn Tortillas" },
{ value: "cornbread", label: "Cornbread" },
{ value: "corned beef", label: "Corned Beef" },
{ value: "cornish hens", label: "Cornish Hens" },
{ value: "cornmeal", label: "Cornmeal" },
{ value: "cornstarch", label: "Cornstarch" },
{ value: "cotija cheese", label: "Cotija Cheese" },
{ value: "cottage cheese", label: "Cottage Cheese" },
{ value: "country bread", label: "Country Bread" },
{ value: "courgettes", label: "Courgettes" },
{ value: "couscous", label: "Couscous" },
{ value: "cow pea", label: "Cow Pea" },
{ value: "crabmeat", label: "Crabmeat" },
{ value: "cracked pepper", label: "Cracked Pepper" },
{ value: "cranberries", label: "Cranberries" },
{ value: "cranberry juice", label: "Cranberry Juice" },
{ value: "cream", label: "Cream" },
{ value: "cream cheese", label: "Cream Cheese" },
{ value: "cream cheese block", label: "Cream Cheese Block" },
{ value: "cream of chicken soup", label: "Cream Of Chicken Soup" },
{ value: "cream of tartar", label: "Cream Of Tartar" },
{ value: "creamed corn", label: "Creamed Corn" },
{ value: "creamy peanut butter", label: "Creamy Peanut Butter" },
{ value: "creme fraiche", label: "Creme Fraiche" },
{ value: "cremini mushrooms", label: "Cremini Mushrooms" },
{ value: "creole seasoning", label: "Creole Seasoning" },
{ value: "crisp rice cereal", label: "Crisp Rice Cereal" },
{ value: "croutons", label: "Croutons" },
{ value: "crystallized ginger", label: "Crystallized Ginger" },
{ value: "cucumber", label: "Cucumber" },
{ value: "cumin seeds", label: "Cumin Seeds" },
{ value: "cup cake", label: "Cup Cake" },
{ value: "currants", label: "Currants" },
{ value: "curry leaves", label: "Curry Leaves" },
{ value: "dairy free milk", label: "Dairy Free Milk" },
{ value: "dark brown sugar", label: "Dark Brown Sugar" },
{ value: "dark chocolate", label: "Dark Chocolate" },
{ value: "dark chocolate candy bars", label: "Dark Chocolate Candy Bars" },
{ value: "dark chocolate chips", label: "Dark Chocolate Chips" },
{ value: "dark sesame oil", label: "Dark Sesame Oil" },
{ value: "dates", label: "Dates" },
{ value: "deep dish pie crust", label: "Deep Dish Pie Crust" },
{ value: "deli ham", label: "Deli Ham" },
{ value: "deli turkey", label: "Deli Turkey" },
{ value: "dessert oats", label: "Dessert Oats" },
{ value: "dessert wine", label: "Dessert Wine" },
{ value: "diced ham", label: "Diced Ham" },
{ value: "diet pop", label: "Diet Pop" },
{ value: "dijon mustard", label: "Dijon Mustard" },
{ value: "dill", label: "Dill" },
{ value: "dill pickles", label: "Dill Pickles" },
{ value: "hot dog", label: "Hot Dog" },
{ value: "double cream", label: "Double Cream" },
{ value: "dried apricots", label: "Dried Apricots" },
{ value: "dried basil", label: "Dried Basil" },
{ value: "dried cherries", label: "Dried Cherries" },
{ value: "dried chorizo", label: "Dried Chorizo" },
{ value: "dried cranberries", label: "Dried Cranberries" },
{ value: "dried dill", label: "Dried Dill" },
{ value: "dried onion", label: "Dried Onion" },
{ value: "dried porcini mushrooms", label: "Dried Porcini Mushrooms" },
{ value: "dried rubbed sage", label: "Dried Rubbed Sage" },
{ value: "dried thyme", label: "Dried Thyme" },
{ value: "dried tomatoes", label: "Dried Tomatoes" },
{ value: "dry bread crumbs", label: "Dry Bread Crumbs" },
{ value: "dry milk", label: "Dry Milk" },
{ value: "dry mustard", label: "Dry Mustard" },
{ value: "dry red wine", label: "Dry Red Wine" },
{ value: "dry roasted peanuts", label: "Dry Roasted Peanuts" },
{ value: "duck fat", label: "Duck Fat" },
{ value: "dutch process cocoa powder", label: "Dutch Process Cocoa Powder" },
{ value: "edamame", label: "Edamame" },
{ value: "egg substitute", label: "Egg Substitute" },
{ value: "egg vermicelli", label: "Egg Vermicelli" },
{ value: "egg whites", label: "Egg Whites" },
{ value: "egg yolk", label: "Egg Yolk" },
{ value: "eggnog", label: "Eggnog" },
{ value: "eggplant", label: "Eggplant" },
{ value: "elbow macaroni", label: "Elbow Macaroni" },
{ value: "enchilada sauce", label: "Enchilada Sauce" },
{ value: "english cucumber", label: "English Cucumber" },
{ value: "english muffin", label: "English Muffin" },
{ value: "erythritol", label: "Erythritol" },
{ value: "escarole", label: "Escarole" },
{ value: "espresso", label: "Espresso" },
{ value: "evaporated milk", label: "Evaporated Milk" },
{ value: "extra firm tofu", label: "Extra Firm Tofu" },
{ value: "extra virgin olive oil", label: "Extra Virgin Olive Oil" },
{ value: "farfalle", label: "Farfalle" },
{ value: "farro", label: "Farro" },
{ value: "fat free mayo", label: "Fat Free Mayo" },
{ value: "fat-free less-sodium chicken broth", label: "Fat-Free Less-Sodium Chicken Broth" },
{ value: "fennel", label: "Fennel" },
{ value: "fennel seeds", label: "Fennel Seeds" },
{ value: "fenugreek leaf", label: "Fenugreek Leaf" },
{ value: "fenugreek seeds", label: "Fenugreek Seeds" },
{ value: "feta cheese", label: "Feta Cheese" },
{ value: "fettuccine", label: "Fettuccine" },
{ value: "fire roasted tomatoes", label: "Fire Roasted Tomatoes" },
{ value: "fish", label: "Fish" },
{ value: "fish sauce", label: "Fish Sauce" },
{ value: "fish stock", label: "Fish Stock" },
{ value: "flank steak", label: "Flank Steak" },
{ value: "flax seeds", label: "Flax Seeds" },
{ value: "fleur de sel", label: "Fleur De Sel" },
{ value: "flour", label: "Flour" },
{ value: "flour tortillas", label: "Flour Tortillas" },
{ value: "fontina cheese", label: "Fontina Cheese" },
{ value: "food dye", label: "Food Dye" },
{ value: "frank's redhot sauce", label: "Frank'S Redhot Sauce" },
{ value: "free range eggs", label: "Free Range Eggs" },
{ value: "french bread", label: "French Bread" },
{ value: "fresh basil", label: "Fresh Basil" },
{ value: "fresh bean sprouts", label: "Fresh Bean Sprouts" },
{ value: "fresh chives", label: "Fresh Chives" },
{ value: "fresh corn", label: "Fresh Corn" },
{ value: "fresh corn kernels", label: "Fresh Corn Kernels" },
{ value: "fresh figs", label: "Fresh Figs" },
{ value: "fresh fruit", label: "Fresh Fruit" },
{ value: "fresh herbs", label: "Fresh Herbs" },
{ value: "fresh mint", label: "Fresh Mint" },
{ value: "fresh mozzarella", label: "Fresh Mozzarella" },
{ value: "fresh rosemary", label: "Fresh Rosemary" },
{ value: "fresh thyme leaves", label: "Fresh Thyme Leaves" },
{ value: "fried onions", label: "Fried Onions" },
{ value: "frosting", label: "Frosting" },
{ value: "froyo bars", label: "Froyo Bars" },
{ value: "frozen corn", label: "Frozen Corn" },
{ value: "frozen spinach", label: "Frozen Spinach" },
{ value: "fudge", label: "Fudge" },
{ value: "fudge topping", label: "Fudge Topping" },
{ value: "fun size almond joy bar", label: "Fun Size Almond Joy Bar" },
{ value: "garam masala", label: "Garam Masala" },
{ value: "garbanzo bean flour", label: "Garbanzo Bean Flour" },
{ value: "garlic", label: "Garlic" },
{ value: "garlic paste", label: "Garlic Paste" },
{ value: "garlic powder", label: "Garlic Powder" },
{ value: "garlic powder", label: "Garlic Powder" },
{ value: "garlic salt", label: "Garlic Salt" },
{ value: "gelatin", label: "Gelatin" },
{ value: "gf chocolate cake mix", label: "Gf Chocolate Cake Mix" },
{ value: "gin", label: "Gin" },
{ value: "ginger", label: "Ginger" },
{ value: "ginger ale", label: "Ginger Ale" },
{ value: "ginger paste", label: "Ginger Paste" },
{ value: "ginger-garlic paste", label: "Ginger-Garlic Paste" },
{ value: "gingersnap cookies", label: "Gingersnap Cookies" },
{ value: "gnocchi", label: "Gnocchi" },
{ value: "goat cheese", label: "Goat Cheese" },
{ value: "golden raisins", label: "Golden Raisins" },
{ value: "gorgonzola", label: "Gorgonzola" },
{ value: "gouda cheese", label: "Gouda Cheese" },
{ value: "graham cracker crumbs", label: "Graham Cracker Crumbs" },
{ value: "graham cracker pie crust", label: "Graham Cracker Pie Crust" },
{ value: "graham crackers", label: "Graham Crackers" },
{ value: "grain blend", label: "Grain Blend" },
{ value: "grand marnier", label: "Grand Marnier" },
{ value: "granny smith apples", label: "Granny Smith Apples" },
{ value: "granola", label: "Granola" },
{ value: "granulated garlic", label: "Granulated Garlic" },
{ value: "grape tomatoes", label: "Grape Tomatoes" },
{ value: "grapefruit", label: "Grapefruit" },
{ value: "grapeseed oil", label: "Grapeseed Oil" },
{ value: "gravy", label: "Gravy" },
{ value: "great northern beans", label: "Great Northern Beans" },
{ value: "greek yogurt", label: "Greek Yogurt" },
{ value: "green beans", label: "Green Beans" },
{ value: "green bell pepper", label: "Green Bell Pepper" },
{ value: "green chili pepper", label: "Green Chili Pepper" },
{ value: "green food coloring", label: "Green Food Coloring" },
{ value: "green grapes", label: "Green Grapes" },
{ value: "green olives", label: "Green Olives" },
{ value: "green onions", label: "Green Onions" },
{ value: "greens", label: "Greens" },
{ value: "grill cheese", label: "Grill Cheese" },
{ value: "grill seasoning", label: "Grill Seasoning" },
{ value: "ground allspice", label: "Ground Allspice" },
{ value: "ground ancho chili", label: "Ground Ancho Chili" },
{ value: "ground beef", label: "Ground Beef" },
{ value: "ground chicken", label: "Ground Chicken" },
{ value: "ground chipotle chile pepper", label: "Ground Chipotle Chile Pepper" },
{ value: "ground cinnamon", label: "Ground Cinnamon" },
{ value: "ground cinnamon", label: "Ground Cinnamon" },
{ value: "ground cloves", label: "Ground Cloves" },
{ value: "ground coriander seeds", label: "Ground Coriander Seeds" },
{ value: "ground cumin", label: "Ground Cumin" },
{ value: "ground flaxseed", label: "Ground Flaxseed" },
{ value: "ground ginger", label: "Ground Ginger" },
{ value: "ground lamb", label: "Ground Lamb" },
{ value: "ground mace", label: "Ground Mace" },
{ value: "ground nutmeg", label: "Ground Nutmeg" },
{ value: "ground pork", label: "Ground Pork" },
{ value: "ground pork sausage", label: "Ground Pork Sausage" },
{ value: "ground veal", label: "Ground Veal" },
{ value: "gruyere", label: "Gruyere" },
{ value: "guacamole", label: "Guacamole" },
{ value: "half n half", label: "Half N Half" },
{ value: "halibut fillet", label: "Halibut Fillet" },
{ value: "ham", label: "Ham" },
{ value: "hamburger buns", label: "Hamburger Buns" },
{ value: "hard cooked eggs", label: "Hard Cooked Eggs" },
{ value: "harissa", label: "Harissa" },
{ value: "hash brown potatoes", label: "Hash Brown Potatoes" },
{ value: "hazelnuts", label: "Hazelnuts" },
{ value: "healthy request cream of celery soup", label: "Healthy Request Cream Of Celery Soup" },
{ value: "hemp seeds", label: "Hemp Seeds" },
{ value: "herbes de provence", label: "Herbes De Provence" },
{ value: "herbs", label: "Herbs" },
{ value: "hershey's kisses brand milk chocolates", label: "Hershey'S Kisses Brand Milk Chocolates" },
{ value: "hoisin sauce", label: "Hoisin Sauce" },
{ value: "honey mustard", label: "Honey Mustard" },
{ value: "horseradish", label: "Horseradish" },
{ value: "hot sauce", label: "Hot Sauce" },
{ value: "hummus", label: "Hummus" },
{ value: "ice", label: "Ice" },
{ value: "ice cream", label: "Ice Cream" },
{ value: "instant chocolate pudding mix", label: "Instant Chocolate Pudding Mix" },
{ value: "instant coffee powder", label: "Instant Coffee Powder" },
{ value: "instant espresso powder", label: "Instant Espresso Powder" },
{ value: "instant lemon pudding mix", label: "Instant Lemon Pudding Mix" },
{ value: "instant yeast", label: "Instant Yeast" },
{ value: "irish cream", label: "Irish Cream" },
{ value: "italian bread", label: "Italian Bread" },
{ value: "italian cheese blend", label: "Italian Cheese Blend" },
{ value: "italian sausages", label: "Italian Sausages" },
{ value: "italian seasoning", label: "Italian Seasoning" },
{ value: "jaggery", label: "Jaggery" },
{ value: "jalapeno", label: "Jalapeno" },
{ value: "jasmine rice", label: "Jasmine Rice" },
{ value: "jelly", label: "Jelly" },
{ value: "jicama", label: "Jicama" },
{ value: "jimmies", label: "Jimmies" },
{ value: "juice", label: "Juice" },
{ value: "jumbo shell pasta", label: "Jumbo Shell Pasta" },
{ value: "kaffir lime leaves", label: "Kaffir Lime Leaves" },
{ value: "kahlua", label: "Kahlua" },
{ value: "kalamata olives", label: "Kalamata Olives" },
{ value: "kale", label: "Kale" },
{ value: "ketchup", label: "Ketchup" },
{ value: "kitchen bouquet", label: "Kitchen Bouquet" },
{ value: "kiwis", label: "Kiwis" },
{ value: "kosher salt", label: "Kosher Salt" },
{ value: "ladyfingers", label: "Ladyfingers" },
{ value: "lamb", label: "Lamb" },
{ value: "lasagna noodles", label: "Lasagna Noodles" },
{ value: "lb cake", label: "Lb Cake" },
{ value: "lean ground beef", label: "Lean Ground Beef" },
{ value: "lean ground turkey", label: "Lean Ground Turkey" },
{ value: "lean pork tenderloin", label: "Lean Pork Tenderloin" },
{ value: "leeks", label: "Leeks" },
{ value: "leg of lamb", label: "Leg Of Lamb" },
{ value: "lemon", label: "Lemon" },
{ value: "lemon curd", label: "Lemon Curd" },
{ value: "lemon extract", label: "Lemon Extract" },
{ value: "lemon juice", label: "Lemon Juice" },
{ value: "lemon peel", label: "Lemon Peel" },
{ value: "lemon pepper", label: "Lemon Pepper" },
{ value: "lemon wedges", label: "Lemon Wedges" },
{ value: "lemongrass", label: "Lemongrass" },
{ value: "lettuce", label: "Lettuce" },
{ value: "lettuce leaves", label: "Lettuce Leaves" },
{ value: "light butter", label: "Light Butter" },
{ value: "light coconut milk", label: "Light Coconut Milk" },
{ value: "light corn syrup", label: "Light Corn Syrup" },
{ value: "light cream cheese", label: "Light Cream Cheese" },
{ value: "light mayonnaise", label: "Light Mayonnaise" },
{ value: "light olive oil", label: "Light Olive Oil" },
{ value: "light soy sauce", label: "Light Soy Sauce" },
{ value: "lime", label: "Lime" },
{ value: "lime juice", label: "Lime Juice" },
{ value: "lime wedges", label: "Lime Wedges" },
{ value: "lime zest", label: "Lime Zest" },
{ value: "linguine", label: "Linguine" },
{ value: "liquid smoke", label: "Liquid Smoke" },
{ value: "liquid stevia", label: "Liquid Stevia" },
{ value: "liquor", label: "Liquor" },
{ value: "live lobster", label: "Live Lobster" },
{ value: "long-grain rice", label: "Long-Grain Rice" },
{ value: "low fat buttermilk", label: "Low Fat Buttermilk" },
{ value: "low fat milk", label: "Low Fat Milk" },
{ value: "low fat milk", label: "Low Fat Milk" },
{ value: "low fat plain yogurt", label: "Low Fat Plain Yogurt" },
{ value: "low fat ricotta cheese", label: "Low Fat Ricotta Cheese" },
{ value: "low fat sour cream", label: "Low Fat Sour Cream" },
{ value: "low sodium chicken broth", label: "Low Sodium Chicken Broth" },
{ value: "low sodium soy sauce", label: "Low Sodium Soy Sauce" },
{ value: "low-sodium chicken stock", label: "Low-Sodium Chicken Stock" },
{ value: "lower sodium beef broth", label: "Lower Sodium Beef Broth" },
{ value: "lump crab", label: "Lump Crab" },
{ value: "m&m candies", label: "M&M Candies" },
{ value: "macadamia nuts", label: "Macadamia Nuts" },
{ value: "macaroni and cheese mix", label: "Macaroni And Cheese Mix" },
{ value: "madras curry powder", label: "Madras Curry Powder" },
{ value: "malt drink mix", label: "Malt Drink Mix" },
{ value: "mandarin orange sections", label: "Mandarin Orange Sections" },
{ value: "mandarin oranges", label: "Mandarin Oranges" },
{ value: "mango", label: "Mango" },
{ value: "maple syrup", label: "Maple Syrup" },
{ value: "maraschino cherries", label: "Maraschino Cherries" },
{ value: "margarine", label: "Margarine" },
{ value: "marinara sauce", label: "Marinara Sauce" },
{ value: "marjoram", label: "Marjoram" },
{ value: "marsala wine", label: "Marsala Wine" },
{ value: "marshmallow fluff", label: "Marshmallow Fluff" },
{ value: "marshmallows", label: "Marshmallows" },
{ value: "masa harina", label: "Masa Harina" },
{ value: "mascarpone", label: "Mascarpone" },
{ value: "mat beans", label: "Mat Beans" },
{ value: "matcha tea", label: "Matcha Tea" },
{ value: "mayonnaise", label: "Mayonnaise" },
{ value: "meat", label: "Meat" },
{ value: "meat", label: "Meat" },
{ value: "meatballs", label: "Meatballs" },
{ value: "medjool dates", label: "Medjool Dates" },
{ value: "mexican cream", label: "Mexican Cream" },
{ value: "meyer lemon juice", label: "Meyer Lemon Juice" },
{ value: "milk", label: "Milk" },
{ value: "milk chocolate chips", label: "Milk Chocolate Chips" },
{ value: "mint chutney", label: "Mint Chutney" },
{ value: "minute rice", label: "Minute Rice" },
{ value: "miracle whip", label: "Miracle Whip" },
{ value: "mirin", label: "Mirin" },
{ value: "miso", label: "Miso" },
{ value: "molasses", label: "Molasses" },
{ value: "monterey jack cheese", label: "Monterey Jack Cheese" },
{ value: "mushroom", label: "Mushroom" },
{ value: "mussels", label: "Mussels" },
{ value: "mustard", label: "Mustard" },
{ value: "mustard seeds", label: "Mustard Seeds" },
{ value: "napa cabbage", label: "Napa Cabbage" },
{ value: "navel oranges", label: "Navel Oranges" },
{ value: "nectarine", label: "Nectarine" },
{ value: "new potatoes", label: "New Potatoes" },
{ value: "non-fat greek yogurt", label: "Non-Fat Greek Yogurt" },
{ value: "nonfat cool whip", label: "Nonfat Cool Whip" },
{ value: "nonfat milk", label: "Nonfat Milk" },
{ value: "nori", label: "Nori" },
{ value: "nut butter", label: "Nut Butter" },
{ value: "nut meal", label: "Nut Meal" },
{ value: "nutella", label: "Nutella" },
{ value: "nutritional yeast", label: "Nutritional Yeast" },
{ value: "oat flour", label: "Oat Flour" },
{ value: "oats", label: "Oats" },
{ value: "oil", label: "Oil" },
{ value: "oil packed sun dried tomatoes", label: "Oil Packed Sun Dried Tomatoes" },
{ value: "okra", label: "Okra" },
{ value: "old bay seasoning", label: "Old Bay Seasoning" },
{ value: "olive oil", label: "Olive Oil" },
{ value: "olives", label: "Olives" },
{ value: "onion", label: "Onion" },
{ value: "onion powder", label: "Onion Powder" },
{ value: "onion soup mix", label: "Onion Soup Mix" },
{ value: "orange", label: "Orange" },
{ value: "orange bell pepper", label: "Orange Bell Pepper" },
{ value: "orange juice", label: "Orange Juice" },
{ value: "orange juice concentrate", label: "Orange Juice Concentrate" },
{ value: "orange liqueur", label: "Orange Liqueur" },
{ value: "orange marmalade", label: "Orange Marmalade" },
{ value: "orange oil", label: "Orange Oil" },
{ value: "orange zest", label: "Orange Zest" },
{ value: "oregano", label: "Oregano" },
{ value: "oreo cookies", label: "Oreo Cookies" },
{ value: "orzo", label: "Orzo" },
{ value: "oyster sauce", label: "Oyster Sauce" },
{ value: "oysters", label: "Oysters" },
{ value: "palm sugar", label: "Palm Sugar" },
{ value: "pancetta", label: "Pancetta" },
{ value: "paneer", label: "Paneer" },
{ value: "panko", label: "Panko" },
{ value: "papaya", label: "Papaya" },
{ value: "paprika", label: "Paprika" },
{ value: "parmigiano reggiano", label: "Parmigiano Reggiano" },
{ value: "parsley", label: "Parsley" },
{ value: "parsley flakes", label: "Parsley Flakes" },
{ value: "parsnip", label: "Parsnip" },
{ value: "part-skim mozzarella cheese", label: "Part-Skim Mozzarella Cheese" },
{ value: "pasta", label: "Pasta" },
{ value: "pasta salad mix", label: "Pasta Salad Mix" },
{ value: "pasta sauce", label: "Pasta Sauce" },
{ value: "pastry flour", label: "Pastry Flour" },
{ value: "peach", label: "Peach" },
{ value: "peanut butter", label: "Peanut Butter" },
{ value: "peanut butter chips", label: "Peanut Butter Chips" },
{ value: "peanut butter cups", label: "Peanut Butter Cups" },
{ value: "peanut oil", label: "Peanut Oil" },
{ value: "peanuts", label: "Peanuts" },
{ value: "pear liqueur", label: "Pear Liqueur" },
{ value: "pearl barley", label: "Pearl Barley" },
{ value: "pearl onions", label: "Pearl Onions" },
{ value: "peas", label: "Peas" },
{ value: "pecan", label: "Pecan" },
{ value: "pecan pieces", label: "Pecan Pieces" },
{ value: "pecorino", label: "Pecorino" },
{ value: "penne", label: "Penne" },
{ value: "peperoncino", label: "Peperoncino" },
{ value: "pepper jack cheese", label: "Pepper Jack Cheese" },
{ value: "peppercorns", label: "Peppercorns" },
{ value: "peppermint baking chips", label: "Peppermint Baking Chips" },
{ value: "peppermint extract", label: "Peppermint Extract" },
{ value: "pepperoni", label: "Pepperoni" },
{ value: "peppers", label: "Peppers" },
{ value: "pesto", label: "Pesto" },
{ value: "pickle relish", label: "Pickle Relish" },
{ value: "pickles", label: "Pickles" },
{ value: "pico de gallo", label: "Pico De Gallo" },
{ value: "pie crust", label: "Pie Crust" },
{ value: "pimento stuffed olives", label: "Pimento Stuffed Olives" },
{ value: "pimientos", label: "Pimientos" },
{ value: "pine nuts", label: "Pine Nuts" },
{ value: "pineapple", label: "Pineapple" },
{ value: "pineapple chunks", label: "Pineapple Chunks" },
{ value: "pineapple in juice", label: "Pineapple In Juice" },
{ value: "pineapple juice", label: "Pineapple Juice" },
{ value: "pink himalayan salt", label: "Pink Himalayan Salt" },
{ value: "pinto beans", label: "Pinto Beans" },
{ value: "pistachios", label: "Pistachios" },
{ value: "pita", label: "Pita" },
{ value: "pizza crust", label: "Pizza Crust" },
{ value: "pizza mix", label: "Pizza Mix" },
{ value: "plain greek yogurt", label: "Plain Greek Yogurt" },
{ value: "plain nonfat yogurt", label: "Plain Nonfat Yogurt" },
{ value: "plain yogurt", label: "Plain Yogurt" },
{ value: "plantain", label: "Plantain" },
{ value: "plum", label: "Plum" },
{ value: "plum tomatoes", label: "Plum Tomatoes" },
{ value: "poblano peppers", label: "Poblano Peppers" },
{ value: "polenta", label: "Polenta" },
{ value: "polish sausage", label: "Polish Sausage" },
{ value: "pomegranate juice", label: "Pomegranate Juice" },
{ value: "pomegranate molasses", label: "Pomegranate Molasses" },
{ value: "pomegranate seeds", label: "Pomegranate Seeds" },
{ value: "popcorn", label: "Popcorn" },
{ value: "poppy seeds", label: "Poppy Seeds" },
{ value: "pork", label: "Pork" },
{ value: "Pork & Beans", label: "Pork & Beans" },
{ value: "pork belly", label: "Pork Belly" },
{ value: "pork butt", label: "Pork Butt" },
{ value: "pork chops", label: "Pork Chops" },
{ value: "pork links", label: "Pork Links" },
{ value: "pork loin chops", label: "Pork Loin Chops" },
{ value: "pork loin roast", label: "Pork Loin Roast" },
{ value: "pork roast", label: "Pork Roast" },
{ value: "pork shoulder", label: "Pork Shoulder" },
{ value: "pork tenderloin", label: "Pork Tenderloin" },
{ value: "port", label: "Port" },
{ value: "portabella mushrooms", label: "Portabella Mushrooms" },
{ value: "pot roast", label: "Pot Roast" },
{ value: "potato chips", label: "Potato Chips" },
{ value: "potato starch", label: "Potato Starch" },
{ value: "potatoes", label: "Potatoes" },
{ value: "poultry seasoning", label: "Poultry Seasoning" },
{ value: "powdered sugar", label: "Powdered Sugar" },
{ value: "pretzel sandwiches", label: "Pretzel Sandwiches" },
{ value: "processed american cheese", label: "Processed American Cheese" },
{ value: "prosciutto", label: "Prosciutto" },
{ value: "provolone cheese", label: "Provolone Cheese" },
{ value: "prunes", label: "Prunes" },
{ value: "puff pastry", label: "Puff Pastry" },
{ value: "pumpkin", label: "Pumpkin" },
{ value: "pumpkin pie filling", label: "Pumpkin Pie Filling" },
{ value: "pumpkin pie spice", label: "Pumpkin Pie Spice" },
{ value: "pumpkin puree", label: "Pumpkin Puree" },
{ value: "pumpkin seeds", label: "Pumpkin Seeds" },
{ value: "queso fresco", label: "Queso Fresco" },
{ value: "quick cooking oats", label: "Quick Cooking Oats" },
{ value: "quinoa", label: "Quinoa" },
{ value: "quinoa flour", label: "Quinoa Flour" },
{ value: "radicchio", label: "Radicchio" },
{ value: "radishes", label: "Radishes" },
{ value: "raisins", label: "Raisins" },
{ value: "rajma masala", label: "Rajma Masala" },
{ value: "ramen noodles", label: "Ramen Noodles" },
{ value: "ranch dressing", label: "Ranch Dressing" },
{ value: "ranch dressing mix", label: "Ranch Dressing Mix" },
{ value: "raspberries", label: "Raspberries" },
{ value: "raspberry jam", label: "Raspberry Jam" },
{ value: "raw cashews", label: "Raw Cashews" },
{ value: "raw shrimp", label: "Raw Shrimp" },
{ value: "ready-to-serve Asian fried rice", label: "Ready-To-Serve Asian Fried Rice" },
{ value: "real bacon recipe pieces", label: "Real Bacon Recipe Pieces" },
{ value: "red apples", label: "Red Apples" },
{ value: "red bell peppers", label: "Red Bell Peppers" },
{ value: "red cabbage", label: "Red Cabbage" },
{ value: "red chilli", label: "Red Chilli" },
{ value: "red delicious apples", label: "Red Delicious Apples" },
{ value: "red food coloring", label: "Red Food Coloring" },
{ value: "red grapefruit juice", label: "Red Grapefruit Juice" },
{ value: "red grapes", label: "Red Grapes" },
{ value: "red kidney beans", label: "Red Kidney Beans" },
{ value: "red lentils", label: "Red Lentils" },
{ value: "red onion", label: "Red Onion" },
{ value: "red pepper flakes", label: "Red Pepper Flakes" },
{ value: "red pepper powder", label: "Red Pepper Powder" },
{ value: "red potatoes", label: "Red Potatoes" },
{ value: "red velvet cookie", label: "Red Velvet Cookie" },
{ value: "red wine", label: "Red Wine" },
{ value: "red wine vinegar", label: "Red Wine Vinegar" },
{ value: "reduced fat shredded cheddar cheese", label: "Reduced Fat Shredded Cheddar Cheese" },
{ value: "refried beans", label: "Refried Beans" },
{ value: "refrigerated crescent rolls", label: "Refrigerated Crescent Rolls" },
{ value: "refrigerated pizza dough", label: "Refrigerated Pizza Dough" },
{ value: "refrigerated sugar cookie dough", label: "Refrigerated Sugar Cookie Dough" },
{ value: "rhubarb", label: "Rhubarb" },
{ value: "rib tips", label: "Rib Tips" },
{ value: "rice", label: "Rice" },
{ value: "rice flour", label: "Rice Flour" },
{ value: "rice krispies cereal", label: "Rice Krispies Cereal" },
{ value: "rice milk", label: "Rice Milk" },
{ value: "rice noodles", label: "Rice Noodles" },
{ value: "rice paper", label: "Rice Paper" },
{ value: "rice syrup", label: "Rice Syrup" },
{ value: "rice vinegar", label: "Rice Vinegar" },
{ value: "rice wine", label: "Rice Wine" },
{ value: "ricotta salata", label: "Ricotta Salata" },
{ value: "ritz crackers", label: "Ritz Crackers" },
{ value: "roast beef", label: "Roast Beef" },
{ value: "roasted chicken", label: "Roasted Chicken" },
{ value: "roasted nuts", label: "Roasted Nuts" },
{ value: "roasted peanuts", label: "Roasted Peanuts" },
{ value: "roasted red peppers", label: "Roasted Red Peppers" },
{ value: "roma tomatoes", label: "Roma Tomatoes" },
{ value: "romaine lettuce", label: "Romaine Lettuce" },
{ value: "root vegetables", label: "Root Vegetables" },
{ value: "rosemary", label: "Rosemary" },
{ value: "rotini pasta", label: "Rotini Pasta" },
{ value: "rotisserie chicken", label: "Rotisserie Chicken" },
{ value: "round steak", label: "Round Steak" },
{ value: "rub", label: "Rub" },
{ value: "rum extract", label: "Rum Extract" },
{ value: "runny honey", label: "Runny Honey" },
{ value: "russet potatoes", label: "Russet Potatoes" },
{ value: "rutabaga", label: "Rutabaga" },
{ value: "rye bread", label: "Rye Bread" },
{ value: "rye meal", label: "Rye Meal" },
{ value: "saffron threads", label: "Saffron Threads" },
{ value: "sage", label: "Sage" },
{ value: "sage leaves", label: "Sage Leaves" },
{ value: "salad dressing", label: "Salad Dressing" },
{ value: "salami", label: "Salami" },
{ value: "salmon fillet", label: "Salmon Fillet" },
{ value: "salsa", label: "Salsa" },
{ value: "salsa verde", label: "Salsa Verde" },
{ value: "salt", label: "Salt" },
{ value: "salt and pepper", label: "Salt And Pepper" },
{ value: "salted butter", label: "Salted Butter" },
{ value: "saltine crackers", label: "Saltine Crackers" },
{ value: "sandwich bun", label: "Sandwich Bun" },
{ value: "sauerkraut", label: "Sauerkraut" },
{ value: "sausage", label: "Sausage" },
{ value: "sausage links", label: "Sausage Links" },
{ value: "scotch bonnet chili", label: "Scotch Bonnet Chili" },
{ value: "sea salt", label: "Sea Salt" },
{ value: "sea scallops", label: "Sea Scallops" },
{ value: "seasoned bread crumbs", label: "Seasoned Bread Crumbs" },
{ value: "seasoned rice vinegar", label: "Seasoned Rice Vinegar" },
{ value: "seasoned salt", label: "Seasoned Salt" },
{ value: "seasoning", label: "Seasoning" },
{ value: "seasoning blend", label: "Seasoning Blend" },
{ value: "seeds", label: "Seeds" },
{ value: "self-rising flour", label: "Self-Rising Flour" },
{ value: "semi sweet chocolate chips", label: "Semi Sweet Chocolate Chips" },
{ value: "serrano chile", label: "Serrano Chile" },
{ value: "sesame oil", label: "Sesame Oil" },
{ value: "sesame seed hamburger buns", label: "Sesame Seed Hamburger Buns" },
{ value: "sesame seeds", label: "Sesame Seeds" },
{ value: "shallot", label: "Shallot" },
{ value: "sharp cheddar cheese", label: "Sharp Cheddar Cheese" },
{ value: "sheeps milk cheese", label: "Sheeps Milk Cheese" },
{ value: "shells", label: "Shells" },
{ value: "sherry", label: "Sherry" },
{ value: "sherry", label: "Sherry" },
{ value: "sherry vinegar", label: "Sherry Vinegar" },
{ value: "shiitake mushroom caps", label: "Shiitake Mushroom Caps" },
{ value: "short grain rice", label: "Short Grain Rice" },
{ value: "short pasta", label: "Short Pasta" },
{ value: "short ribs", label: "Short Ribs" },
{ value: "shortbread cookies", label: "Shortbread Cookies" },
{ value: "shortcrust pastry", label: "Shortcrust Pastry" },
{ value: "shortening", label: "Shortening" },
{ value: "shredded cheddar cheese", label: "Shredded Cheddar Cheese" },
{ value: "shredded cheese", label: "Shredded Cheese" },
{ value: "shredded chicken", label: "Shredded Chicken" },
{ value: "shredded coconut", label: "Shredded Coconut" },
{ value: "shredded mexican cheese blend", label: "Shredded Mexican Cheese Blend" },
{ value: "shredded mexican cheese blend", label: "Shredded Mexican Cheese Blend" },
{ value: "shredded mozzarella", label: "Shredded Mozzarella" },
{ value: "silken tofu", label: "Silken Tofu" },
{ value: "sirloin steak", label: "Sirloin Steak" },
{ value: "skim milk ricotta", label: "Skim Milk Ricotta" },
{ value: "skim vanilla greek yogurt", label: "Skim Vanilla Greek Yogurt" },
{ value: "skin-on bone-in chicken leg quarters", label: "Skin-On Bone-In Chicken Leg Quarters" },
{ value: "skinless boneless chicken breast halves", label: "Skinless Boneless Chicken Breast Halves" },
{ value: "skinless boneless chicken thighs", label: "Skinless Boneless Chicken Thighs" },
{ value: "skinned black gram", label: "Skinned Black Gram" },
{ value: "slaw dressing", label: "Slaw Dressing" },
{ value: "slaw mix", label: "Slaw Mix" },
{ value: "slivered almonds", label: "Slivered Almonds" },
{ value: "smoked paprika", label: "Smoked Paprika" },
{ value: "smoked salmon", label: "Smoked Salmon" },
{ value: "smoked sausage", label: "Smoked Sausage" },
{ value: "smooth peanut butter", label: "Smooth Peanut Butter" },
{ value: "snapper fillets", label: "Snapper Fillets" },
{ value: "snow peas", label: "Snow Peas" },
{ value: "soda water", label: "Soda Water" },
{ value: "sour cream", label: "Sour Cream" },
{ value: "sourdough bowl", label: "Sourdough Bowl" },
{ value: "sourdough bread", label: "Sourdough Bread" },
{ value: "soy milk", label: "Soy Milk" },
{ value: "soy protein powder", label: "Soy Protein Powder" },
{ value: "soy sauce", label: "Soy Sauce" },
{ value: "spaghetti", label: "Spaghetti" },
{ value: "spaghetti squash", label: "Spaghetti Squash" },
{ value: "sparkling wine", label: "Sparkling Wine" },
{ value: "spelt flour", label: "Spelt Flour" },
{ value: "spicy brown mustard", label: "Spicy Brown Mustard" },
{ value: "spinach", label: "Spinach" },
{ value: "sprite", label: "Sprite" },
{ value: "sprouts", label: "Sprouts" },
{ value: "squash", label: "Squash" },
{ value: "sriracha sauce", label: "Sriracha Sauce" },
{ value: "steaks", label: "Steaks" },
{ value: "steel cut oats", label: "Steel Cut Oats" },
{ value: "stevia", label: "Stevia" },
{ value: "stew meat", label: "Stew Meat" },
{ value: "stew vegetables", label: "Stew Vegetables" },
{ value: "stock", label: "Stock" },
{ value: "store-bought phyllo", label: "Store-Bought Phyllo" },
{ value: "stout", label: "Stout" },
{ value: "strawberries", label: "Strawberries" },
{ value: "strawberry jam", label: "Strawberry Jam" },
{ value: "strawberry jello", label: "Strawberry Jello" },
{ value: "stuffing", label: "Stuffing" },
{ value: "stuffing mix", label: "Stuffing Mix" },
{ value: "sub rolls", label: "Sub Rolls" },
{ value: "sugar", label: "Sugar" },
{ value: "sugar snap peas", label: "Sugar Snap Peas" },
{ value: "sugar syrup", label: "Sugar Syrup" },
{ value: "sukrin sweetener", label: "Sukrin Sweetener" },
{ value: "summer savory", label: "Summer Savory" },
{ value: "summer squash", label: "Summer Squash" },
{ value: "sunflower oil", label: "Sunflower Oil" },
{ value: "sunflower seeds", label: "Sunflower Seeds" },
{ value: "sweet chilli sauce", label: "Sweet Chilli Sauce" },
{ value: "sweet onion", label: "Sweet Onion" },
{ value: "sweet paprika", label: "Sweet Paprika" },
{ value: "sweet pickle juice", label: "Sweet Pickle Juice" },
{ value: "sweet pickle relish", label: "Sweet Pickle Relish" },
{ value: "sweet potato", label: "Sweet Potato" },
{ value: "sweet tea", label: "Sweet Tea" },
{ value: "sweetened coconut", label: "Sweetened Coconut" },
{ value: "sweetened condensed milk", label: "Sweetened Condensed Milk" },
{ value: "sweetened shredded coconut", label: "Sweetened Shredded Coconut" },
{ value: "swiss chard", label: "Swiss Chard" },
{ value: "swiss cheese", label: "Swiss Cheese" },
{ value: "taco seasoning mix", label: "Taco Seasoning Mix" },
{ value: "taco shells", label: "Taco Shells" },
{ value: "tahini", label: "Tahini" },
{ value: "tamari", label: "Tamari" },
{ value: "tapioca flour", label: "Tapioca Flour" },
{ value: "tarragon", label: "Tarragon" },
{ value: "tart apple", label: "Tart Apple" },
{ value: "tea bags", label: "Tea Bags" },
{ value: "tequila", label: "Tequila" },
{ value: "teriyaki sauce", label: "Teriyaki Sauce" },
{ value: "thai basil", label: "Thai Basil" },
{ value: "thai chiles", label: "Thai Chiles" },
{ value: "thai red curry paste", label: "Thai Red Curry Paste" },
{ value: "thick-cut bacon", label: "Thick-Cut Bacon" },
{ value: "tilapia fillets", label: "Tilapia Fillets" },
{ value: "toast", label: "Toast" },
{ value: "toffee bits", label: "Toffee Bits" },
{ value: "tofu", label: "Tofu" },
{ value: "tomatillos", label: "Tomatillos" },
{ value: "tomato juice", label: "Tomato Juice" },
{ value: "tomato paste", label: "Tomato Paste" },
{ value: "tomato puree", label: "Tomato Puree" },
{ value: "tomato sauce", label: "Tomato Sauce" },
{ value: "tomato soup", label: "Tomato Soup" },
{ value: "tomatoes", label: "Tomatoes" },
{ value: "top blade steak", label: "Top Blade Steak" },
{ value: "top round steak", label: "Top Round Steak" },
{ value: "Top Sirloin", label: "Top Sirloin" },
{ value: "tortilla", label: "Tortilla" },
{ value: "tortilla chips", label: "Tortilla Chips" },
{ value: "triple sec", label: "Triple Sec" },
{ value: "truffle oil", label: "Truffle Oil" },
{ value: "tuna", label: "Tuna" },
{ value: "turbinado sugar", label: "Turbinado Sugar" },
{ value: "turkey", label: "Turkey" },
{ value: "turkey breast", label: "Turkey Breast" },
{ value: "turkey kielbasa", label: "Turkey Kielbasa" },
{ value: "turmeric", label: "Turmeric" },
{ value: "turnips", label: "Turnips" },
{ value: "unbleached flour", label: "Unbleached Flour" },
{ value: "unsalted butter", label: "Unsalted Butter" },
{ value: "unsmoked back bacon", label: "Unsmoked Back Bacon" },
{ value: "unsweetened applesauce", label: "Unsweetened Applesauce" },
{ value: "unsweetened coconut milk", label: "Unsweetened Coconut Milk" },
{ value: "unsweetened shredded coconut", label: "Unsweetened Shredded Coconut" },
{ value: "vanilla bean", label: "Vanilla Bean" },
{ value: "vanilla bean paste", label: "Vanilla Bean Paste" },
{ value: "vanilla essence", label: "Vanilla Essence" },
{ value: "vanilla extract", label: "Vanilla Extract" },
{ value: "vanilla frosting", label: "Vanilla Frosting" },
{ value: "vanilla instant pudding mix", label: "Vanilla Instant Pudding Mix" },
{ value: "vanilla protein powder", label: "Vanilla Protein Powder" },
{ value: "vanilla wafers", label: "Vanilla Wafers" },
{ value: "vanilla yogurt", label: "Vanilla Yogurt" },
{ value: "vegan cheese", label: "Vegan Cheese" },
{ value: "vegan chocolate chips", label: "Vegan Chocolate Chips" },
{ value: "vegan margarine", label: "Vegan Margarine" },
{ value: "vegetable broth", label: "Vegetable Broth" },
{ value: "vegetable oil", label: "Vegetable Oil" },
{ value: "vegetarian bacon", label: "Vegetarian Bacon" },
{ value: "vermouth", label: "Vermouth" },
{ value: "vinaigrette", label: "Vinaigrette" },
{ value: "vinegar", label: "Vinegar" },
{ value: "vodka", label: "Vodka" },
{ value: "walnuts", label: "Walnuts" },
{ value: "water", label: "Water" },
{ value: "water chestnuts", label: "Water Chestnuts" },
{ value: "water-packed tuna", label: "Water-Packed Tuna" },
{ value: "watercress", label: "Watercress" },
{ value: "watermelon chunks", label: "Watermelon Chunks" },
{ value: "wheat bran", label: "Wheat Bran" },
{ value: "wheat germ", label: "Wheat Germ" },
{ value: "whipped cream", label: "Whipped Cream" },
{ value: "whipped topping", label: "Whipped Topping" },
{ value: "whipping cream", label: "Whipping Cream" },
{ value: "whiskey", label: "Whiskey" },
{ value: "white balsamic vinegar", label: "White Balsamic Vinegar" },
{ value: "white bread", label: "White Bread" },
{ value: "white cake mix", label: "White Cake Mix" },
{ value: "white cheddar", label: "White Cheddar" },
{ value: "white chocolate", label: "White Chocolate" },
{ value: "white chocolate chips", label: "White Chocolate Chips" },
{ value: "white onion", label: "White Onion" },
{ value: "white pepper", label: "White Pepper" },
{ value: "white whole wheat flour", label: "White Whole Wheat Flour" },
{ value: "white wine", label: "White Wine" },
{ value: "white wine vinegar", label: "White Wine Vinegar" },
{ value: "whole allspice berries", label: "Whole Allspice Berries" },
{ value: "whole chicken", label: "Whole Chicken" },
{ value: "whole coriander seeds", label: "Whole Coriander Seeds" },
{ value: "whole cranberry sauce", label: "Whole Cranberry Sauce" },
{ value: "whole kernel corn", label: "Whole Kernel Corn" },
{ value: "whole star anise", label: "Whole Star Anise" },
{ value: "whole wheat bread", label: "Whole Wheat Bread" },
{ value: "whole wheat flour", label: "Whole Wheat Flour" },
{ value: "whole wheat tortillas", label: "Whole Wheat Tortillas" },
{ value: "whole-grain mustard", label: "Whole-Grain Mustard" },
{ value: "wine", label: "Wine" },
{ value: "wine vinegar", label: "Wine Vinegar" },
{ value: "winter squash", label: "Winter Squash" },
{ value: "won ton wraps", label: "Won Ton Wraps" },
{ value: "worcestershire sauce", label: "Worcestershire Sauce" },
{ value: "wraps", label: "Wraps" },
{ value: "xanthan gum", label: "Xanthan Gum" },
{ value: "yeast", label: "Yeast" },
{ value: "yellow bell pepper", label: "Yellow Bell Pepper" },
{ value: "yellow cake mix", label: "Yellow Cake Mix" },
{ value: "yellow onion", label: "Yellow Onion" },
{ value: "yogurt", label: "Yogurt" },
{ value: "yukon gold potato", label: "Yukon Gold Potato" }
  ]

  const cuisineOptions = [
    { value: "african", label: "African" },
    { value: "american", label: "American" },
    { value: "barbecue", label: "Barbecue" },
    { value: "british", label: "British" },
    { value: "cajun", label: "Cajun" },
    { value: "caribbean", label: "Caribbean" },
    { value: "chinese", label: "Chinese" },
    { value: "eastern european", label: "Eastern European" },
    { value: "french", label: "French" },
    { value: "german", label: "German" },
    { value: "greek", label: "Greek" },
    { value: "indian", label: "Indian" },
    { value: "irish", label: "Irish" },
    { value: "italian", label: "Italian" },
    { value: "japanese", label: "Japanese" },
    { value: "jewish", label: "Jewish" },
    { value: "korean", label: "Korean" },
    { value: "mediterranean", label: "Mediterranean" },
    { value: "mexican", label: "Mexican" },
    { value: "middle eastern", label: "Middle Eastern" },
    { value: "south american", label: "South American" },
    { value: "southern", label: "Southern" },
    { value: "spanish", label: "Spanish" },
    { value: "thai", label: "Thai" },
    { value: "vietname", label: "Vietname" }
  ]

  const optionStyles = {
    control: (styles) => ({ 
      ...styles, 
      backgroundColor: "white", 
      borderRadius: 20, 
      borderWidth: 2,
      borderColor: '#A6A6A6',
      padding: 2.5,
      width: 500,
    }),
    multiValue: (styles) => {
      return {
        ...styles,
        borderRadius: 20,
        borderWidth: 2,
        padding: 2,
        paddingLeft: 4,
        fontSize: 16,
        marginLeft: -4,
        marginRight: 10,
        onmouseover: "this.style.textDecoration = 'underline'",
      }
    },
    menu: (styles) => {
      return {
        ...styles,
        width: 500,
        borderRadius: 10,
      }
    },
    option: (styles) => {
      return {
        ...styles,
        marginTop: -4,
        marginBottom: -4,
        width: 500,
        borderRadius: 10,
      }
    },
    multiValueRemove: (styles) => {
      return {
        ...styles,
        borderRadius: 20,
      }
    }
  }

//<input type="profile" placeholder="Name" value={name} onChange={event => setName(event.target.value)} /> <br/>

  return (
    <div className='profile_container'>
      <form onSubmit={submitHandler} align="left">
        <div className='sub_title'>
          General Information
        </div>
        <input type="profile" placeholder="First Name"value={firstName} onChange={event => setFistName(event.target.value)}/> <br/>
        <input type="profile" placeholder="Last Name"value={lastName} onChange={event => setLastName(event.target.value)}/> <br/>
        <input type="profile" placeholder="Email" value={email} onChange={event => setEmail(event.target.value)}/> <br/>
        <input type="bio" placeholder="Bio" value={bio} onChange={event => setBio(event.target.value)} /> <br/>
        <br/>
        <div className='option_title'>
          Dietary Restrictions:
        </div>
        <Select options={dietOptions} isMulti isClearable name="diets" styles={optionStyles}/>
        <br/>
        <div className='option_title'>
          Favorite Cuisines:
        </div>
        <Select options={cuisineOptions} isMulti isClearable name="cuisines" styles={optionStyles} onChange/>
        <br/>
        <div className='option_title'>
          Ingredients:
        </div>
        <Select options={ingredientOptions} isMulti isClearable name="ingredients" styles={optionStyles} onChange/>
        <br/>
        <SaveButton input type="submit">
          Save
        </SaveButton>
         <br/>
      </form>
    </div>
  )
}

//<input type="button" value="Logout" onClick={logoutHandler}/>

export default Info;