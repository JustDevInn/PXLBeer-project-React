import React from 'react';
import './styling/App.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import Breweries from './pages/Breweries';
import Beers from './pages/Beers';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';




function App() {

  return (
    <Router>
    <div className="App">
    <Nav />
    <Switch>
    <Route path="/" exact component={Home}/>
    <Route path="/beers" component={Beers}/>
    <Route path="/breweries" component={Breweries}/>
    </Switch>
    </div>
    </Router>
  );
}


export default App;
