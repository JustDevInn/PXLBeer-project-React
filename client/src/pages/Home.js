import React from 'react';
import {Link, Route} from 'react-router-dom';
import "../styling/App.css";

function Beer() {
    return (
        <div className="homepageWrapper">
         <div className="beerContainer">
            <div className="subContainer">
            <img src="" alt=""/>
            <Link to="/breweries">
              <button className="btn btn-warning">
                Breweries
              </button>
            </Link>
            </div>
         </div>
        </div>
    )
}


export default Beer;