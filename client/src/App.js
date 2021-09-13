import React from 'react';
import './App.css';
import LandingContainer from './containers/landing/index';
import Home from './containers/home/index';
import { Route, Switch } from 'react-router-dom';
import countryDetails from './containers/countryDetails/index.jsx';
import CreateActivity from './containers/createActivity/index.jsx';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/" component={LandingContainer} />
        <Route exact path="/countries/:id" component={countryDetails} />
        <Route exact path="/createActivity" component={CreateActivity} />
      </Switch>
    </div>
  );
}

export default App;
