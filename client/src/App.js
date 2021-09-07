import React from 'react'
import './App.css';
import LandingContainer from './containers/landing';
import Home from './containers/home';
import { Route, Switch } from 'react-router-dom';
import countryDetails from './containers/countryDetails';
import CreateActivity from './containers/createActivity/index'



function App() {



  return (
    <div className="App">
      <Switch>
        <Route exact path='/home' component={Home} />
        <Route exact path='/' component={LandingContainer} />
        <Route exact path='/countries/:id' component={countryDetails}/>
        <Route exact path='/createActivity' component={CreateActivity} />
      </Switch>
    </div>
  );
}

export default App;
