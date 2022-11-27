import React from "react";
import {useLocation} from "react-router-dom";
import '../App.css'
import Home from "./home";


export default function Recipe() {
  const location = useLocation();
  const meal = location.state.meal

      return (
        
        <><Home/><article className="all-browsers">
          <h1>{meal.title}</h1>
        </article><article>
        <img className="img" src={meal.image} alt={meal.title}/>
          </article></>

      );
    }