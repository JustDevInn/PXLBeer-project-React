import React, { Component } from 'react'
import {Link, Route} from 'react-router-dom';
import "../styling/beers.css"
import Axios from 'axios';



export class Beers extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 beers:[]
        };
        this.getAllBeers = this.getAllBeers.bind(this);
    }

    
    getAllBeers() {
        Axios.get("http://localhost:3000/beers")
          .then((response) => {
            console.log("all beers response: ", response);
            this.setState({ beers: response.data.beers });
          })
          .catch((error) => {
            console.log(error);
          });
      }

      componentDidMount() {
        this.getAllBeers();
      }

    render() {
        return (
            <div className="beer-wiki">
                <h1>beer</h1>
             {this.state.beers.map(beer => 
            <div class="individualBeer">
                <Link
              key={beer.id}
              to={`/beers/${beer.id}`}
              className="beer-detail-link">
              <div className="row beer-list">
                <div className="col-7 beer-list_text">
                  <h5>{beer.name}</h5>
                  <p>Brewed: {beer.year}</p>
                  <p>id: {beer.id}</p>
                </div>
              </div>
            </Link>
            </div>
            )}  
        </div>
        )
    }
}

export default Beers;