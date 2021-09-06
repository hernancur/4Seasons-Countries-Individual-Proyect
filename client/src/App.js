import React, { useEffect } from 'react'
import './App.css';
import LandingContainer from './containers/landing';
import Home from './containers/home';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAll } from '../src/redux/actions/index'
import countryDetails from './containers/countryDetails';



function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAll()); // pre carga de todos los paises para mostrarlos de 1
  }, [dispatch]);

  return (
    <div className="App">
      <Switch>
        <Route exact path='/countries/:id' component={countryDetails}/>
        <Route exact path='/home' component={Home} />
        <Route exact path='/' component={LandingContainer} />
      </Switch>
    </div>
  );
}

export default App;
