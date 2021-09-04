import React from 'react';
import CardsStyle from './Cards.module.css'
import {useSelector} from 'react-redux'
import CountryCard from '../CountryCard/CountryCard'


export default function Cards() {
 
  let state = useSelector(state => state.countries)
  
  return (
    <div className={CardsStyle.cartas}>
      {state?.map((el) => <CountryCard key={el.id} name={el.name} continent={el.continent} img={el.img} />)}
      
    </div>
  )
};